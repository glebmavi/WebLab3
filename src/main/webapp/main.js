import {activateXButtons, formListener, handleRChange} from "./resources/js/variablesVerification";
import {loadTheme} from "./resources/js/theme";
import {localeManager} from "./resources/js/locale";
import {drawFromTable} from "./resources/js/drawFromTable";
import {convertToUserTimeZone} from "./resources/js/timezone";

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    localeManager();
    const locale = document.documentElement.lang;
    convertToUserTimeZone(locale);
    formListener(locale);
    handleRChange();
    drawFromTable();
    activateXButtons();
});