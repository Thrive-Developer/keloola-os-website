<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use File;
use Illuminate\Filesystem\Filesystem;

class CrudGenerator extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:crud {name} {column*}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate CRUD';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Filesystem $files)
    {
        parent::__construct();

        $this->files = $files;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');
        $column = $this->argument('column');
        $this->controller($name, $column);
        $this->model($name, $column);
        $this->request($name, $column);
        $this->generateIndex($name, $column);
        $this->generateCreate($name, $column);
        // $this->generateEdit($name, $column);
        // $this->generateMigration($name, $column);
        // $this->resource($name, $column);   //create resource

        // create route
        File::append(
            base_path('routes/web.php'),
            "Route::resource('" . strtolower($name) . "', App\Http\Controllers\\" . $name . "Controller::class);"
        );
        return $this->info("Crud $name Created");
    }

    protected function getStub($type)
    {
        return file_get_contents(resource_path("stubs/$type.stub"));
    }

    protected function controller($name, $column)
    {
        $modelRequest = $this->convertToRequestRequired($column);
        $controllerTemplate = str_replace(
            [
                '{{modelName}}',
                '{{modelNamePlural}}',
                '{{modelNameSingular}}',
                '{{modelRequest}}',
            ],
            [
                $name,
                strtolower(Str::plural($name)),
                strtolower($name),
                $modelRequest
            ],
            $this->getStub('Controller')
        );
        file_put_contents(app_path("/Http/Controllers/{$name}Controller.php"), $controllerTemplate);
    }

    protected function model($name, $column)
    {
        $modelColumn = "'" . implode("', '", $column) . "'";
        $modelSave = $this->convertToSaveModel($column);
        $modelTemplate = str_replace(
            ['{{modelName}}', '{{modelNamePlural}}', '{{modelNameSingular}}', '{{modelColumn}}', '{{modelSave}}'],
            [$name, strtolower(Str::plural($name)), strtolower($name), $modelColumn, $modelSave],
            $this->getStub('Model')
        );
        file_put_contents(app_path("/Models/{$name}.php"), $modelTemplate);
    }

    protected function request($name, $column)
    {
        $modelColumn = "'" . implode("', '", $column) . "'";
        $modelRequest = $this->convertToRequestRequired($column);
        $modelTemplate = str_replace(
            ['{{modelName}}', '{{modelNamePlural}}', '{{modelColumn}}', '{{modelRequest}}'],
            [$name, strtolower(Str::plural($name)), $modelColumn, $modelRequest],
            $this->getStub('Request')
        );
        file_put_contents(app_path("/Http/Requests/{$name}Request.php"), $modelTemplate);
    }

    protected function resource($name, $column)
    {
        $modelColumn = "'" . implode("', '", $column) . "'";
        $modelResource = $this->convertToResource($column);
        $modelTemplate = str_replace(
            ['{{modelName}}', '{{modelNamePlural}}', '{{modelColumn}}', '{{modelResource}}'],
            [$name, strtolower(Str::plural($name)), $modelColumn, $modelResource],
            $this->getStub('Resource')
        );
        file_put_contents(app_path("/Http/Resources/{$name}Resource.php"), $modelTemplate);
    }

    protected function convertToSaveModel($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = "\$this->$model = \$data['$model'];";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToRequestRequired($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = "'$model'" . " => " . "'required',";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToResource($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = "'$model'" . " => " . "\$this->$model,";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToTableHeading($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = '<th scope="col">' . str_replace('_', ' ', ucwords($model)) . '</th>';
            }

            return implode("\n", $column);
        }
    }

    protected function convertToTableBody($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = "<td>{{ item." . $model . " }}</td>";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToFields($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = "{ key: '" . $model . "', label: '" . ucwords($model) . "'},";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToMigration($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = "\$table->string('" . $model . "');";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToInput($column, $modelNameSingular)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = '
                <div class="mb-3">
                    <label class="form-label">' . str_replace('_', ' ', ucwords($model)) . '</label>
                    <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        v-model="model.' . $model . '"
                    />
                    <small
                        class="form-text text-danger"
                        v-if="errors.' . $model . '"
                        >{{ errors.' . $model . ' }}</small
                    >
                </div>
                ';
            }

            return implode(" ", $column);
        }
    }

    protected function convertToReactive($column, $modelNameSingular)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = $model . ": props." . $modelNameSingular . " ? props." . $modelNameSingular . "." . $model . " : '',";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToReactiveEdit($column, $modelNameSingular)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = $model . ": props." . $modelNameSingular . "." . $model . ",";
            }

            return implode("\n", $column);
        }
    }

    protected function convertToPost($column)
    {
        if (count($column) > 0) {
            foreach ($column as $key => $model) {
                $column[$key] = $model . ": " . $model . ",";
            }

            return implode("\n", $column);
        }
    }

    protected function generateIndex($name, $column)
    {
        $fields = $this->convertToFields($column);
        $indexTemplate = str_replace(
            [
                '{{modelName}}',
                '{{modelNamePlural}}',
                '{{modelNameSingular}}',
                '{{fields}}',
            ],
            [
                $name,
                strtolower(Str::plural($name)),
                strtolower($name),
                $fields,
            ],
            $this->getStub('Index')
        );
        if (!file_exists(base_path("resources/js/Pages/" . $name))) {
            mkdir(base_path("resources/js/Pages/" . $name), 0777);
        }
        $this->write(resource_path("js/Pages/" . $name . "/Index.vue"), $indexTemplate);
    }

    protected function generateCreate($name, $column)
    {
        $dataInput = $this->convertToInput($column, strtolower($name));
        $dataReactive = $this->convertToReactive($column, strtolower($name));
        $dataPost = $this->convertToPost($column, strtolower($name));
        $createTemplate = str_replace(
            [
                '{{modelName}}',
                '{{modelNamePlural}}',
                '{{modelNameSingular}}',
                '{{dataInput}}',
                '{{dataReactive}}',
                '{{dataPost}}',
            ],
            [
                $name,
                strtolower(Str::plural($name)),
                strtolower($name),
                $dataInput,
                $dataReactive,
                $dataPost
            ],
            $this->getStub('Form')
        );
        if (!file_exists(base_path("resources/js/Pages/" . $name))) {
            mkdir(base_path("resources/js/Pages/" . $name), 0777);
        }
        $this->write(resource_path("js/Pages/" . $name . "/Form.vue"), $createTemplate);
    }

    protected function generateEdit($name, $column)
    {
        $dataInput = $this->convertToInput($column, strtolower($name));
        $dataReactive = $this->convertToReactiveEdit($column, strtolower($name));
        $dataPost = $this->convertToPost($column, strtolower($name));
        $createTemplate = str_replace(
            [
                '{{modelName}}',
                '{{modelNamePlural}}',
                '{{modelNameSingular}}',
                '{{dataInput}}',
                '{{dataReactive}}',
                '{{dataPost}}',
            ],
            [
                $name,
                strtolower(Str::plural($name)),
                strtolower($name),
                $dataInput,
                $dataReactive,
                $dataPost
            ],
            $this->getStub('Edit')
        );
        if (!file_exists(base_path("resources/js/Pages/" . $name))) {
            mkdir(base_path("resources/js/Pages/" . $name), 0777);
        }
        $this->write(resource_path("js/Pages/" . $name . "/Edit.vue"), $createTemplate);
    }

    protected function generateMigration($name, $column)
    {
        $columnName = $this->convertToMigration($column);
        $migrationTemplate = str_replace(
            [
                '{{modelName}}',
                '{{modelNamePlural}}',
                '{{modelNameSingular}}',
                '{{columnName}}',
            ],
            [
                $name,
                ucwords((Str::plural($name))),
                strtolower($name),
                $columnName,
            ],
            $this->getStub('Migration')
        );
        $migrationName = date('Y') . "_" . date('m') . "_" . date('d') . "_" . time() . "_create_" . strtolower(Str::plural($name)) . "_table";
        $this->write(base_path("database/migrations/" . $migrationName), $migrationTemplate);
    }

    /**
     * Build the directory if necessary.
     *
     * @param string $path
     *
     * @return string
     */
    protected function makeDirectory($path)
    {
        if (!$this->files->isDirectory(dirname($path))) {
            $this->files->makeDirectory(dirname($path), 0777, true, true);
        }

        return $path;
    }

    /**
     * Write the file/Class.
     *
     * @param $path
     * @param $content
     */
    protected function write($path, $content)
    {
        $this->files->put($path, $content);
    }
}
