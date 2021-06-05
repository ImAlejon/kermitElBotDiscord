//imports start

import {smartMeridiems, isoddmaster, daysString, hourWithMeridiems, weekNumber} 
from './dateFunctions.js';

import dotenv from 'dotenv'
dotenv.config()

import Discord from 'discord.js';
const client = new Discord.Client();

//imports end
//needed variables start
const oddWeekMonday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2
                 y el día es ${daysString}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Español', value:'-'},
    {name:'Artes', value:'-'},
    {name:'Filosofia', value:'-'},
);
const oddWeekTuesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2
                 y el día es ${daysString}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Estadística', value:'-'},
    {name:'Trigonometria', value:'-'},
    {name:'Ingles', value:'-'},
);
const oddWeekWednesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2
                 y el día es ${daysString}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Química', value:'-'},
    {name:'Filosofia', value:'-'},
    {name:'Español', value:'-'},
);
const oddWeekThursday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Filosofia', value:'-'},
    {name:'Trigonometría', value:'-'},
    {name:'Física', value:'-'},
);
const oddWeekFriday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Qímica', value:'-'},
    {name:'Informatica', value:'-'},
    {name:'Artes', value:'-'},
);
const pairWeekMonday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Español', value:'-'},
    {name:'Artes', value:'-'},
    {name:'Filosofia', value:'-'},
);
const pairWeekTuesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Español', value:'-'},
    {name:'Ingles', value:'-'},
    {name:'Educación Física', value:'-'},
);
const pairWeekWednesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Química', value:'-'},
    {name:'Ingles', value:'-'},
    {name:'Trigonometría', value:'-'},
);
const pairWeekThursday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Filosofía', value:'-'},
    {name:'Física', value:'-'},
    {name:'Etica', value:'-'},
);
const pairWeekFriday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`Esta es la semana 2, 
                y el día es ${daysString}`)
.addFields(
    {name:'Investigación y Mecatronica', value:'-'},
    {name:'Química', value:'-'},
    {name:'Trigonometría', value:'-'},
    {name:'Física', value:'-'},
);
const token = process.env.TOKEN;
//needed variables end

//discord bot log in start
client.on('ready', () => {
    setInterval(() => {
        // Needed variables start
        let todayHours = new Date().getHours("en-US", {timeZone: "America/Bogota"});
        let todayMinutes = new Date().getMinutes("en-US", {timeZone: "America/Bogota"});
        let todaySeconds = new Date().getSeconds("en-US", {timeZone: "America/Bogota"});
        let date = todayHours.toString() + todayMinutes.toString() + todaySeconds.toString() + smartMeridiems();
        console.log(date)
        // Needed variables end
        // Send Image According the day Start
        if (date == '500AM'){
            client.channels.cache.get('714677132999000375').send({files:[`${daysString}.jpg`]});
        }
        // Send Imagee According the day End
        // Send Calendar Start
        if(weekNumber){
            if(date == '1400PM' && daysString == 'Monday'){
                client.channels.cache.get('847243975319617537').send(pairWeekMonday);
            }else if(date == '1400PM' && daysString == 'Tuesday'){
                client.channels.cache.get('847243975319617537').send(pairWeekTuesday);
            }else if(date == '1400PM' && daysString == 'Wednesday'){
                client.channels.cache.get('847243975319617537').send(pairWeekWednesday);
            }else if(date == '1400PM' && daysString == 'Thursday'){
                client.channels.cache.get('847243975319617537').send(pairWeekThursday);
            }else if(date == '1400PM' && daysString == 'Friday'){
                client.channels.cache.get('847243975319617537').send(pairWeekFriday);
            }
        } else {
            if(date == '1400PM' && daysString == 'Monday'){
                client.channels.cache.get('847243975319617537').send(oddWeekMonday);
            }else if(date == '1400PM' && daysString == 'Tuesday'){
                client.channels.cache.get('847243975319617537').send(oddWeekTuesday);
            }else if(date == '1400PM' && daysString == 'Wednesday'){
                client.channels.cache.get('847243975319617537').send(oddWeekWednesday);
            }else if(date == '1400PM' && daysString == 'Thursday'){
                client.channels.cache.get('847243975319617537').send(oddWeekThursday);
            }else if(date == '1400PM' && daysString == 'Friday'){
                client.channels.cache.get('847243975319617537').send(oddWeekFriday);
            }
          }  
        // Send Calendar End    
    }, 1000);
});

client.login(token);



//discord bot log in end