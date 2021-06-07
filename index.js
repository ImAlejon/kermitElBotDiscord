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
            console.log('Hola 1-1')
            if(hourWithMeridiems == calendarHour){
                if(daysString == 'Monday'){
                client.channels.cache.get(calendarChannel).send(pairWeekMonday);
                console.log('Sended pairWeekMonday calendar');
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Tuesday'){
                client.channels.cache.get(calendarChannel).send(pairWeekTuesday);
                console.log('Sended pairWeekTuesday calendar');
                };
            }else if(hourWithMeridiems == calendarHour){
                if( daysString == 'Wednesday'){
                client.channels.cache.get(calendarChannel).send(pairWeekWednesday);
                console.log('Sended pairWeeekWednesday calendar');
                };
            }else if(hourWithMeridiems == calendarHour){
                if( daysString == 'Thursday'){
                client.channels.cache.get(calendarChannel).send(pairWeekThursday);
                console.log('Sended pairWeekThursday calendar');
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Friday'){
                client.channels.cache.get(calendarChannel).send(pairWeekFriday);
                console.log('Sended oddWeekFriday calendar');
                };
            }
        }else if(!weekNumber){
            if(hourWithMeridiems == calendarHour){
                if(daysString == 'Monday'){
                client.channels.cache.get(calendarChannel).send(oddWeekMonday);
                console.log('Sended oddWeekMonday calendar');
                };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Tuesday'){
                client.channels.cache.get(calendarChannel).send(oddWeekTuesday);
                console.log('Sended oddWeekTuesday calendar');
            };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Wednesday'){
                client.channels.cache.get(calendarChannel).send(oddWeekWednesday);
                console.log('Sended oddWeekWednesday calendar');
            };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Thursday'){
                client.channels.cache.get(calendarChannel).send(oddWeekThursday);
                console.log('Sended oddWeekThursday calendar');
            };
            }else if(hourWithMeridiems == calendarHour){
                if(daysString == 'Friday'){
                client.channels.cache.get(calendarChannel).send(oddWeekFriday);
                console.log('Sended oddWeekFriday calendar');
            };
            }
          }  
        // Send Calendar End    
    }, 1000);
});

client.login(token);



//discord bot log in end