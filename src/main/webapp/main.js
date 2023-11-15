import {formListener} from "./resources/js/variablesVerification";
import {responseGetter} from "./resources/js/responseGetter";
import {resetTable} from "./resources/js/resetTable";
import {loadTheme} from "./resources/js/theme";
import {localeManager} from "./resources/js/locale";
import {drawFromTable} from "./resources/js/drawFromTable";
import {getTimezone, tableModificationListener} from "./resources/js/timezone";

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    localeManager();
    getTimezone();
    // formListener();
    // resetTable();
    // responseGetter();
    // drawFromTable();
});