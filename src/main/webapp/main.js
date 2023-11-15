import {formListener, handleRChange} from "./resources/js/variablesVerification";
import {loadTheme} from "./resources/js/theme";
import {localeManager} from "./resources/js/locale";
import {drawFromTable} from "./resources/js/drawFromTable";
import {getTimezone} from "./resources/js/timezone";

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    localeManager();
    getTimezone();
    formListener();
    handleRChange();
    drawFromTable();
});