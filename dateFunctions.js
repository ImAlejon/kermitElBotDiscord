//imports
import { DateTime } from "luxon";
//imports end
//utils
const daysInEsp = () => {
  if(daysString == 'Monday'){
    return 'Lunes';
  }else if(daysString == 'Tuesday'){
    return 'Martes';
  }else if(daysString == 'Wednesday'){
    return 'Miércoles';
  }else if(daysString == 'Thursday'){
    return 'Jueves';
  }else if(daysString == 'Friday'){
    return 'Viernes'
  }else{
    return console.error('Cant recognize the day');
  }
};
const isOdd = (param) => {
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

//utils end

//variables
const timeDate = DateTime.local().setZone('America/Bogota');
const daysInt = timeDate.get('day');
const yearInt = timeDate.year;
const monthInt = timeDate.month;
const daysString = timeDate.weekdayLong
const week = DateTime.local(yearInt,monthInt,daysInt).weekNumber;
const weekNumber = isOdd(week);
const dias = daysInEsp();
//variables end

//exports

export {weekNumber, daysString, dias};

//exports end