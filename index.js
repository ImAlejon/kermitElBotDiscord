//imports start
import { DateTime } from "luxon";

import {daysString, weekNumber} 
from './dateFunctions.js';

import {
    oddWeekMonday, oddWeekTuesday, oddWeekWednesday, oddWeekThursday, oddWeekFriday,
    pairWeekMonday, pairWeekTuesday, pairWeekWednesday, pairWeekThursday, pairWeekFriday
} from './embeddMsgs.js';

import dotenv from 'dotenv'
dotenv.config()

import Discord from 'discord.js';
const client = new Discord.Client();

//imports end

//needed variables start

const token = process.env.TOKEN;
const calendarChannel = process.env.CALENDARTOKEN;
const imgChannel = process.env.IMGTOKEN;
const calendarHour = '090000AM';
const imgHour = '120000AM';
//needed variables end

//discord bot log in start
client.on('ready', () => {
    setInterval(() => {
        // Needed variables start
        const time = DateTime.local().setZone('America/Bogota').toFormat("HHmmss");
        const smartMeridiems = (am, pm) =>{
            if(time > 120000){
                pm = 'PM'
                return pm;
            } else{
                am = 'AM'
                return am;
            }};
        const hourWithMeridiems = `${time}${smartMeridiems()}`;
        console.log(hourWithMeridiems)
        // Needed variables end
        // Send Image According the day Start
        if (hourWithMeridiems == imgHour){
            client.channels.cache.get(imgChannel).send({files:[`${daysString}.jpg`]});
        };
        // Send Imagee According the day End
        // Send Calendar Start
        if(weekNumber){
            if(hourWithMeridiems == calendarHour){
                if(daysString == 'Monday'){
                client.channels.cache.get(calendarChannel).send(pairWeekMonday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Tuesday'){
                client.channels.cache.get(calendarChannel).send(pairWeekTuesday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if( daysString == 'Wednesday'){
                client.channels.cache.get(calendarChannel).send(pairWeekWednesday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if( daysString == 'Thursday'){
                client.channels.cache.get(calendarChannel).send(pairWeekThursday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Friday'){
                client.channels.cache.get(calendarChannel).send(pairWeekFriday);
                };
            }
        }else if(!weekNumber){
            if(hourWithMeridiems == calendarHour){
                if(daysString == 'Monday'){
                client.channels.cache.get(calendarChannel).send(oddWeekMonday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Tuesday'){
                client.channels.cache.get(calendarChannel).send(oddWeekTuesday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Wednesday'){
                client.channels.cache.get(calendarChannel).send(oddWeekWednesday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Thursday'){
                client.channels.cache.get(calendarChannel).send(oddWeekThursday);
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Friday'){
                client.channels.cache.get(calendarChannel).send(oddWeekFriday);
                };
            }
          }  
        // Send Calendar End    
    }, 1000);
});

client.login(token);



//discord bot log in end