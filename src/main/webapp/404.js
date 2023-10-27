import {loadTheme} from "./js/theme";
import {localeManager} from "./js/locale";

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    const locale = localStorage.getItem('locale') || 'en';
    localeManager(locale);
});