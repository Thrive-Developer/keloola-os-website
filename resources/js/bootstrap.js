import axios from "axios";
import "@tabler/core/src/js/tabler.esm";
import "@tabler/core/src/js/demo-theme.js";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
