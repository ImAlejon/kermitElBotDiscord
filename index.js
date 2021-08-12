//imports start
import { DateTime } from "luxon";

import {weekNumber} 
from './dateFunctions.js';

import {
    oddWeekMonday, oddWeekTuesday, oddWeekWednesday, oddWeekThursday, oddWeekFriday,
    pairWeekMonday, pairWeekTuesday, pairWeekWednesday, pairWeekThursday, pairWeekFriday
} from './embeddMsgs.js';

import dotenv from 'dotenv'
dotenv.config()

import Discord from 'discord.js';
const client = new Discord.Client();

import Express from 'express';
const app = Express();
//imports end

//needed variables start

const calendarChannel = process.env.CALENDARTOKEN;
const imgChannel = process.env.IMGTOKEN;
const token = process.env.BOTTOKEN;

//needed variables end

//discord bot log in start
client.on('ready', () => {
  setInterval(()=>{
        const time = DateTime.local().setZone('America/Bogota').toFormat("HHmmss");
        const timeDate = DateTime.local().setZone('America/Bogota');
        const daysString = timeDate.weekdayLong
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
        console.log(daysString)
        // Send Image According the day Start
        if (hourWithMeridiems == '000000AM'){
            client.channels.cache.get(imgChannel).send({files:[`./src/img/${daysString}.jpg`]});
        };
        // Send Imagee According the day End
        // Send Calendar Start
        if(weekNumber){
          if(hourWithMeridiems == '090000AM'){
            if(daysString == 'Monday'){
            client.channels.cache.get(calendarChannel).send(pairWeekMonday);
            console.log('Sended pairWeekMonday calendar');
              if(hourWithMeridiems =='00100AM'){
                client.channels.cache.get(calendarChannel).send('¡Estamos en la semana 1!')
              }
            }else if(daysString == 'Tuesday'){
            client.channels.cache.get(calendarChannel).send(pairWeekTuesday);
            console.log('Sended pairWeekTuesday calendar');
            }else if( daysString == 'Wednesday'){
            client.channels.cache.get(calendarChannel).send(pairWeekWednesday);
            console.log('Sended pairWeeekWednesday calendar');
            }else if( daysString == 'Thursday'){
            client.channels.cache.get(calendarChannel).send(pairWeekThursday);
            console.log('Sended pairWeekThursday calendar');
            }else if(daysString == 'Friday'){
            client.channels.cache.get(calendarChannel).send(pairWeekFriday);
            console.log('Sended oddWeekFriday calendar');
            }
          }
        }else if(!weekNumber){
          if(hourWithMeridiems == '090000AM'){
            if(daysString == 'Monday'){
            client.channels.cache.get(calendarChannel).send(oddWeekMonday);
            console.log('Sended oddWeekMonday calendar');
              if(hourWithMeridiems =='00100AM'){
                client.channels.cache.get(calendarChannel).send('¡Estamos en la semana 2!')
              }
            }else if(daysString == 'Tuesday'){
            client.channels.cache.get(calendarChannel).send(oddWeekTuesday);
            console.log('Sended oddWeekTuesday calendar');
            }else if(daysString == 'Wednesday'){
            client.channels.cache.get(calendarChannel).send(oddWeekWednesday);
            console.log('Sended oddWeekWednesday calendar');
            }else if(daysString == 'Thursday'){
            client.channels.cache.get(calendarChannel).send(oddWeekThursday);
            console.log('Sended oddWeekThursday calendar');
            }else if(daysString == 'Friday'){
            client.channels.cache.get(calendarChannel).send(oddWeekFriday);
            console.log('Sended oddWeekFriday calendar');
            }
          }
        }
  },1000)
});

client.login(token);

app.get("/", (req, res) =>{
  res.send("Hello hell!")
});

app.listen(3000, () =>{
  console.log('Project is ready!')
})


//discord bot log in end