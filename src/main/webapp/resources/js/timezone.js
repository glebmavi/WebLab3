function getTimezone() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneField = document.getElementById('form:timezoneField');
    timezoneField.value = timezone;
}

export {getTimezone};
