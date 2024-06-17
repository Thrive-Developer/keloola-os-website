<template>
    <div>
        <select ref="selectElement">
            <option value="0" selected disabled>- Select -</option>
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import TomSelect from "tom-select";

// Props
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: [String, Number, Array, Object],
        default: null,
    },
    selectOptions: {
        type: Object,
        default: () => ({
            create: true,
            sortField: { field: "text", direction: "asc" },
        }),
    },
});

const emit = defineEmits(["update:modelValue"]);

// Refs
const selectElement = ref(null);
let tomSelectInstance = null;

onMounted(() => {
    tomSelectInstance = new TomSelect(selectElement.value, {
        ...props.selectOptions,
        onChange: (value) => {
            emit("update:modelValue", value);
        },
    });

    if (props.modelValue) {
        tomSelectInstance.setValue(props.modelValue);
    }
});

watch(
    () => props.modelValue,
    (newValue) => {
        if (tomSelectInstance) {
            tomSelectInstance.setValue(newValue);
        }
    }
);

onBeforeUnmount(() => {
    if (tomSelectInstance) {
        tomSelectInstance.destroy();
    }
});
</script>

<style scoped>
/* Import Tom Select's CSS */
@import "tom-select/dist/css/tom-select.css";
</style>
