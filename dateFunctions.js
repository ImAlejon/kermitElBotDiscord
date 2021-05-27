import { DateTime } from "luxon";
import { Info } from 'luxon';
const time = DateTime.local().setZone('America/Bogota').toFormat("HHmmss");
const timeDate = DateTime.local().setZone('America/Bogota');
const smartMeridiems = (am, pm) =>{
    if(time > 120000){
        pm = 'PM'
        return pm;
    } else{
        am = 'AM'
        return am;
    }
}
const hourWithMeridiems = `${time}${smartMeridiems()}`;
const daysInt = timeDate.get('day');
const yearInt = timeDate.year;
const monthInt = timeDate.month;
const daysString = timeDate.weekdayLong
const week = DateTime.local(yearInt,monthInt,daysInt).weekNumber;
const weekNumber = isoddmaster(week);
console.log(hourWithMeridiems, week, weekNumber)

function isoddmaster(param) {
    let num = parseInt(param);

    let result = "";

    if (isNaN(num)) {
        result = "expected an number";
    } else {
        if (Math.abs(num) % 2 === 0) {
            result = "even";
        } else {
            result = "odd";
        }
    }

    return result;
};

function sendImg(){
    if (hourWithMeridiems == '120000AM'){
        client.channels.cache.get('714677132999000375').send({files:[`${daysString}.jpg`]});
    }
};

export {smartMeridiems, isoddmaster, sendImg, hourWithMeridiems, weekNumber, daysString};

