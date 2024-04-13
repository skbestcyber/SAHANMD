const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94772146891"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Sri Lanka.colomb'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94772146891' 
global.devs = '94772146891';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5CVFFDZVhlL0hZbmNIb012bTJGZFdOb2cwMjhxaWhtRmp4S0Y2bTJWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHJ2aG96SFh4dkZENTd3OVdCODFaU2JxaHliOERXZ085SjBkSytZeEZVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSlN5OWdTTXl5RnlRM2F4Yml1MnF2dFk4NVQxQVBJMW1Fcnh4UkM1MWxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZYUR4WnlTdlZUVWtQUXRWcC9iMm12OGFqWkFUbW9yd1Mwc2RCazRRemk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHYTVJQ0xXZ0ZMZVlTQ0laeWd5L2JTZ2trUHJBR3FTcC9vWGVJOFVSVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inorb0ZnVVorUTdveENDNEYxRGxhVVRYdWZSSWNVTGRHdXI2bitGQ0ppQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUF3RktxMUdUb0NIdzlZRUkybVFHajNTTkM4VjRUaFlldjRTUGtBRVFuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW5zbmxNQ1lrejNTbzVJWnNKdkd3ZFNwaUhweThrWWVvbEpGSDRmWEZBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrVDJlVnlES2tldjA2N0tlTUJaVXZtczZ2Z1ZmZzZhYzBJZTZ3T1FaUG5FVXE3ZWFoWGt3Vy8wbGMwL0xUNkM4QXNreDZicjVQYTNUVmdONXYwM2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IklTdjYwWTViQTQxTUo4bmE5Tlp1a2JuMVZqNSsrRE5BTktnOFpNalVnS2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVPaHo5cGQtVFFhRGpadmF2WlBmOEEiLCJwaG9uZUlkIjoiMTE2YThjOTctZjFjMi00YTFmLWIwZmQtZDNlNTYxMmU4ZjlkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNydzNnaXk4RUJDUjBKdTNUQ3U1UjBBaTgrWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0ZFdlBzY09VZDBGNis3Nzc2MTBFZGxWbVhNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHVZOU1BQkVNMnY2TEFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTTNWTlNPTS9PUWlHSWh2dEZVSmp2bTdIOU1qYVVkRHE4VXozazkxUUZFRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0x2U3hDZUhGdENhRVduNlFoOUU5eDk2TnFWS2RIU3M4c1JYT0h3NWMzcjlMYTRHaUpxUUxLb0xrSmFVaWZrcEc4dFU3MUs4cVFwdG84TlJYNWtMRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlFjaHN1VUhJNmFVV3BaaGlyL1NQYk5PdFBSeG9BTmNzcnBEUEJ4QW54eWcxditxR3F4eGt5Mm9PbGMrc1FNL0pkU0JPaGYvdzh0T20vOTBjSUR5aGlRPT0ifSwibWUiOnsiaWQiOiI5NDc3MjE0Njg5MToyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhaGFuIEtlc2hhcmEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzIxNDY4OTE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUTjFUVWpqUHprSWhpSWI3UlZDWTc1dXgvVEkybEhRNnZGTTk1UGRVQlJCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEyOTg2MDY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlwbSJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Sahan Keshara',
  packname:  process.env.PACK_NAME || 'Sahan Keshara',
   
  botname:   process.env.BOT_NAME === undefined ? "sahan Keshara" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined 'W.M Sahan Keshara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true: process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
