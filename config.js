const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Ghana/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "true" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "233247923525" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "set image" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_12_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExLFxuICAgICAgICA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia1VDUkZ1U25WZGt2TVVLbHlIblFHdTIweDVHUFZpa2dHOWFuLzh3TlEwZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia090enMteC1RVWFnZGhRTHNpcHBXQVwiLFxuICBcInBob25lSWRcIjogXCIyNjJhOWUxOC0xN2VhLTRhZDItYTdmMi00YzM4OGVhMDBlMTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAyMjksXG4gICAgICAyNixcbiAgICAgIDgwLFxuICAgICAgMTA0LFxuICAgICAgMjMxLFxuICAgICAgMTM3LFxuICAgICAgMjA1LFxuICAgICAgNTEsXG4gICAgICAxMDMsXG4gICAgICAxNzAsXG4gICAgICAxOTUsXG4gICAgICAxOTAsXG4gICAgICAxOTcsXG4gICAgICAyMjQsXG4gICAgICA4MyxcbiAgICAgIDEwLFxuICAgICAgMjE2LFxuICAgICAgOSxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDExNSxcbiAgICAgIDIxNyxcbiAgICAgIDc1LFxuICAgICAgMTAxLFxuICAgICAgMTQzLFxuICAgICAgOTMsXG4gICAgICAxNjksXG4gICAgICA5NyxcbiAgICAgIDQsXG4gICAgICAxNTcsXG4gICAgICAyMDMsXG4gICAgICA5NCxcbiAgICAgIDkyLFxuICAgICAgMTg0LFxuICAgICAgNjIsXG4gICAgICAxOTYsXG4gICAgICAxNzMsXG4gICAgICAxNjQsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlpQSEI2Q05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NzkyMzUyNTo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTU5MzA4NTg3MTU2Ojk1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2OW8vTUZFTEc1ODdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2o2U0VoSVpmTlI0S0Y4c29iYUduL1F0WHlaUW4renB3MlM1dkVvdjlHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGUWxOZHF3TWhzOGJiUDVkeVV6NkIvU1YyMmdkMUZJendKdlBIQWlHb0NRTUhUQy83a2VJOEdTdmwwVE14TXhqSldDL2tnSkNkZDFJOEQwdzJvZlhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzTFZsY1JiYi9RS0UwQkZUY1laQUJMLzFEelh2SjZIVjFtZkhwK0FqRnBDaEw4NE9MTVNlUEk3SXU2d2RraG05NGF5SUZUM3phN3Y4NUdiL1ErQXdoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTk0NDc1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNiQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2JBLmpzb24iOiAie1wia2V5RGF0YVwiOlwicUR0NUtBNDlERC9ucU90UERqYzhhRVp1VEsrUWFFVjVTZlQyY1huSll2dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTgzOTM5MzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
