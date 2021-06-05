import { DateTime } from "luxon";
const time = DateTime.local().setZone('America/Bogota').toFormat("HHmmss");
const timeDate = DateTime.local().setZone('America/Bogota');
const daysInt = timeDate.get('day');
const yearInt = timeDate.year;
const monthInt = timeDate.month;
const daysString = timeDate.weekdayLong
const week = DateTime.local(yearInt,monthInt,daysInt).weekNumber;
const weekNumber = isoddmaster(week);
function isoddmaster(param) {
    let num = parseInt(param);
    let result = "";
    if (isNaN(num)) {
        result = "expected an number";
    } else {
        if (Math.abs(num) % 2 === 0) {
            result = true;
        } else {
            result = false;
        }
    }

    return result;
};

export {weekNumber, daysString};

