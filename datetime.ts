import { parseDate, parseDateTime, dayOfYear, currentDayOfYear, weekOfYear } from 'https://deno.land/std/datetime/mod.ts'


/**
 * Takes two arguments - (1) String representation of a date (2) Date format
 * @returns a Date object
 */

const date = parseDate("20-01-2019", "dd-mm-yyyy") 



/**
 * Takes two arguments - (1) String representation of a date time (2) Date time format - note no format for seconds
 * @returns a Date time object
 */
const dateTime = parseDateTime("21-01-2020 15:23", "dd-mm-yyyy hh:mm")



/**
 * Takes in a date object
 * @returns returns the day of the provided
 */
const dayofYear = dayOfYear(new Date());


/**
 * No Arguments
 * @returns returns the current day of year
 */
const currentDataOfYear = currentDayOfYear()


/**
 * Takes in a date object
 * @returns returns the week of the provided date
 */
const weekOfTheYear = weekOfYear(new Date())