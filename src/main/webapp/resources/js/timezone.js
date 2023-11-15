function getTimezone() {
    document.getElementById('form:timezoneField').value = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export {getTimezone};
