import {loadTheme} from "./resources/js/theme";
import {localeManager} from "./resources/js/locale";
document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    localeManager();
});