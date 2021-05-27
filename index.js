//imports

import {smartMeridiems, isoddmaster, sendImg, daysString, hourWithMeridiems, weekNumber} 
from './dateFunctions.js';

import dotenv from 'dotenv'
dotenv.config()

import Discord from 'discord.js';
const client = new Discord.Client();

//imports/
//needed variables
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
const sendCalendar = () =>{
    if(!weekNumber){
            if(hourWithMeridiems == '090000AM'){
            switch(daysString){
                case 'lunes':
                    client.channels.cache.get('847243975319617537').send(oddWeekMonday);
                    break;
                case 'martes':
                    client.channels.cache.get('847243975319617537').send(oddWeekTuesday);
                    break;
                case 'miércoles':
                    client.channels.cache.get('847243975319617537').send(oddWeekWednesday);
                    break;
                case 'jueves':
                    client.channels.cache.get('847243975319617537').send(oddWeekThursday);
                    break;
                case 'viernes':
                    client.channels.cache.get('847243975319617537').send(oddWeekFriday);
                    break;
            }
        } else {
                if (hourWithMeridiems == '090000AM') {
                    switch(daysString){
                        case 'lunes':
                            client.channels.cache.get('847243975319617537').send(pairWeekMonday);
                            break;
                        case 'martes':
                            client.channels.cache.get('847243975319617537').send(pairWeekTuesday);
                            break;
                        case 'miércoles':
                            client.channels.cache.get('847243975319617537').send(pairWeekWednesday);
                            break;
                        case 'jueves':
                            client.channels.cache.get('847243975319617537').send(pairWeekThursday);
                            break;
                        case 'viernes':
                            client.channels.cache.get('847243975319617537').send(pairWeekFriday);
                            break;
                    }
                }
        }
    }
}

//needed variables /

//discord bot log in
client.on('ready', () => {
    setInterval(() => {
        sendImg();
        sendCalendar();
    }, 1000);
});

client.login(token);

//discord bot log in /