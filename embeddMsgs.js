//imports

import Discord from 'discord.js';
import { dias } from './dateFunctions.js';
//imports end

//embededd messages

const oddWeekMonday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Español', value:'-'},
    {name:'Artes', value:'-'},
    {name:'Filosofia', value:'-'},
);
const oddWeekTuesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Estadística', value:'-'}, 
    {name:'Trigonometria', value:'-'},
    {name:'Ingles', value:'-'},
);
const oddWeekWednesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Química', value:'-'},
    {name:'Filosofia', value:'-'},
    {name:'Español', value:'-'},
);
const oddWeekThursday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`el  día es ${dias}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Filosofia', value:'-'},
    {name:'Trigonometría', value:'-'},
    {name:'Física', value:'-'},
);
const oddWeekFriday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 2')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Qímica', value:'-'},
    {name:'Informatica', value:'-'},
    {name:'Artes', value:'-'},
);
const pairWeekMonday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 1')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Español', value:'-'},
    {name:'Artes', value:'-'},
    {name:'Filosofia', value:'-'},
);
const pairWeekTuesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 1')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Español', value:'-'},
    {name:'Ingles', value:'-'},
    {name:'Educación Física', value:'-'},
);
const pairWeekWednesday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 1')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Investigación', value:'-'},
    {name:'Química', value:'-'},
    {name:'Ingles', value:'-'},
    {name:'Trigonometría', value:'-'},
);
const pairWeekThursday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 1')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Mecatronica', value:'-'},
    {name:'Filosofía', value:'-'},
    {name:'Física', value:'-'},
    {name:'Etica', value:'-'},
);
const pairWeekFriday = new Discord.MessageEmbed()
.setColor('#FEFDF6')
.setTitle('Estamos en la semana 1')
.setDescription(`el día es ${dias}`)
.addFields(
    {name:'Investigación y Mecatronica', value:'-'},
    {name:'Química', value:'-'},
    {name:'Trigonometría', value:'-'},
    {name:'Física', value:'-'},
);

//embedded messages end

//exports

export {
    oddWeekMonday, oddWeekTuesday, oddWeekWednesday, oddWeekThursday, oddWeekFriday,
    pairWeekMonday, pairWeekTuesday, pairWeekWednesday, pairWeekThursday, pairWeekFriday
}

//exports end