import { 
    smartMeridiems,
    isoddmaster, 
    sendImg,
    daysString,
    weekNumber,
    hourWithMeridiems} from "./dateFunctions.js";

import { 
    pairMonday, 
    pairTuesday, 
    pairWednesday, 
    pairThursday, 
    pairFriday,
    oddMonday, 
    oddTuesday, 
    oddWednesday, 
    oddThursday, 
    oddFriday
 } from "./embedMessages.js"

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.TOKEN;
const sendCalendar = () =>{
    if(weekNumber){
        switch(daysString){
            case 'lunes':
                client.channels.cache.get('847243975319617537').send(oddMonday);
                break;
            case 'martes':
                client.channels.cache.get('847243975319617537').send(oddTuesday);
                break;
            case 'miércoles':
                client.channels.cache.get('847243975319617537').send(oddWednesday);
                break;
            case 'jueves':
                client.channels.cache.get('847243975319617537').send(oddThursday);
                break;
            case 'viernes':
                client.channels.cache.get('847243975319617537').send(oddFriday);
                break;
        } else{
            switch(daysString){
                case 'lunes':
                    client.channels.cache.get('847243975319617537').send(pairMonday);
                    break;
                case 'martes':
                    client.channels.cache.get('847243975319617537').send(pairTuesday);
                    break;
                case 'miércoles':
                    client.channels.cache.get('847243975319617537').send(pairWednesday);
                    break;
                case 'jueves':
                    client.channels.cache.get('847243975319617537').send(pairThursday);
                    break;
                case 'viernes':
                    client.channels.cache.get('847243975319617537').send(pairFriday);
                    break;
        }
    }
}
client.on('ready', () => {
    setInterval(() => {
        sendImg();
        sendCalendar();
    }, 1000);
});

client.login(token);

