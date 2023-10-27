import {formListener} from "./js/variablesVerification";
import {responseGetter} from "./js/responseGetter";
import {resetTable} from "./js/resetTable";
import {loadTheme} from "./js/theme";
import {localeManager} from "./js/locale";
import {drawFromTable} from "./js/drawFromTable";

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    const locale = localStorage.getItem('locale') || 'en';
    localeManager(locale);
    formListener(locale);
    resetTable();
    responseGetter();
    drawFromTable();
});