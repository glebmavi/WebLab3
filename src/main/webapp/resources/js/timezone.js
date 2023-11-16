function convertToUserTimeZone(locale) {
    const dates = document.getElementsByClassName("tableDateTime");

    for (let dateElement of dates) {
        const dateString = dateElement.innerHTML;
        const parts = dateString.split(/[ .:]/);

        // Note: months are 0-indexed in JavaScript Date object, so we subtract 1 from the month
        const originalDate = new Date(
            Date.UTC(parts[2], parts[1] - 1, parts[0], parts[3], parts[4], parts[5])
        );

        dateElement.innerHTML = originalDate.toLocaleString(locale, {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "shortOffset",
        });
    }
}

export {convertToUserTimeZone};
