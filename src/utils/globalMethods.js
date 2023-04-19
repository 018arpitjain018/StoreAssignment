/**
 * The getWeekDay function takes a number representing a day of the week and returns the corresponding weekday as a string.
 * 
 * @params
 * day: a number (1-7) representing a day of the week.
 * 
 * @returns
 * A string representing the corresponding weekday.
 */
export function getWeekDay(day) {
    switch(day) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thrusday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
    }
}

/**
 * This function takes in a numerical month value and returns the corresponding month name as a string.
 * 
 * @params
 * month (number): A numerical value representing the month (0-11).
 * 
 * @returns
 * Returns a string value representing the corresponding month name.
 */
export function getMonthName(month) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[month]
}
