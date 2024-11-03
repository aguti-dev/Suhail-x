const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Ghana, Accra."


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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_18_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUDVzM1ZkaHN5VnV5eTZKcVhidGozTmo2b1lvbitPZlVmZ3gvZEw4d0RScz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWFc2WGZGY1lTeEdlS0NRUTdsUFNrZ1wiLFxuICBcInBob25lSWRcIjogXCJlYjI2ODM3NC0wMzJiLTQ2YmEtODZiZi1kYTM2MDIxN2IwZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTA0LFxuICAgICAgOTQsXG4gICAgICAyNDAsXG4gICAgICA4NyxcbiAgICAgIDEwNSxcbiAgICAgIDY2LFxuICAgICAgMTEsXG4gICAgICAyNDcsXG4gICAgICAyNDUsXG4gICAgICAxNzMsXG4gICAgICAzMSxcbiAgICAgIDE2NixcbiAgICAgIDIxMSxcbiAgICAgIDI4LFxuICAgICAgMTUxLFxuICAgICAgMTMwLFxuICAgICAgOTAsXG4gICAgICAyNDcsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTYzLFxuICAgICAgMzMsXG4gICAgICAyMDUsXG4gICAgICA5MixcbiAgICAgIDE5LFxuICAgICAgODMsXG4gICAgICAxNTMsXG4gICAgICAyOSxcbiAgICAgIDc1LFxuICAgICAgMjUyLFxuICAgICAgNSxcbiAgICAgIDIxNixcbiAgICAgIDE5MSxcbiAgICAgIDEsXG4gICAgICAyNTMsXG4gICAgICA3MCxcbiAgICAgIDUyLFxuICAgICAgMyxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRjhaMkpLNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ3OTIzNTI1Ojk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDcxNTkzMDg1ODcxNTY6OTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDM5by9NRkVJdnRuN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnajZTRWhJWmZOUjRLRjhzb2JhR24vUXRYeVpRbit6cHcyUzV2RW92OUcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5YU3ovV0c0V3BTSDViMDA0Q2hvcWpPdm03TFJGZkkycGdMc3QxRzdxVzRNSkRESGF4M3l0aGpNbjR0YjNjUkt6aVZRT3V6R29HZ3h1V2NpcUtSK0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRmUVBxcWRMOHBDajlVTE85OTBuN0JtcmZDREdKTzJwTVN6eUo0YUQ5TjFPZ0p3U1luTWFCMGVVYWR3NFRUdlE5MHFpVEZ2amJyWFYzZUJGbno0QmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NzkyMzUyNTo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjcyMjcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2JBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYkEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxRHQ1S0E0OUREL25xT3RQRGpjOGFFWnVUSytRYUVWNVNmVDJjWG5KWXZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODM5MzkzMDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
