function createCalendar(currentMonth) {
    var firstDate = new Date(),
        lastDate = new Date(),
        firstDay,
        string = "|Su||Mn||Tu||We||Th||Fr||St|\n",
        counter = 0;
    // So we can use our usual month abbreviation
    currentMonth -= 1;
    // Setting the first day of the month
    firstDate.setMonth(currentMonth, 1);
    firstDay = firstDate.getDay();
    // Setting the last day of the month
    lastDate.setMonth(currentMonth + 1, 0);
    // Outputing previous months empty days of the calendar into the console
    while (counter < firstDay) {
        string += "|" + "__" + "|";
        counter++;
    }
    // Writing the final calendar
    for (counter = 1; counter <= lastDate.getDate(); counter++) {
        var substring = "";
        if (counter < 10) {
            substring += "0" + counter;
        } else {
            substring += counter;
        }

        if (firstDate.getDay() === 6) {
            string += "|" + substring + "|\n";
        } else {
            string += "|" + substring + "|";
        };
        firstDate = new Date(+firstDate + 86400000);
    }
// Printing the calendar
    console.log(string);
}
