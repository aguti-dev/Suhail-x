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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233201555801";




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


global.SESSION_ID = process.env.SESSION_ID  "SUHAIL_23_30_01_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MixcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzLFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzNQTGFTVzQySEMzYkNIeUJZTEs1NjhTZG5sYzA5d3QzUU9rTVE5b2FNQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamFBQ04zRHFST2FqTFR6dzNoT2VsQVwiLFxuICBcInBob25lSWRcIjogXCJkNDZkZmJlZC03NjA3LTQwN2YtYjJmNC1hYmYwNWZmNDg0MzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNjUsXG4gICAgICAxNjgsXG4gICAgICAyMTEsXG4gICAgICAxMjgsXG4gICAgICA1MSxcbiAgICAgIDgsXG4gICAgICAyMzMsXG4gICAgICAyMDcsXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDE5OCxcbiAgICAgIDcwLFxuICAgICAgOTksXG4gICAgICAxMDQsXG4gICAgICAxMjgsXG4gICAgICAxOTksXG4gICAgICAxNSxcbiAgICAgIDE2LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE5MixcbiAgICAgIDE1MSxcbiAgICAgIDEyOSxcbiAgICAgIDExMyxcbiAgICAgIDM2LFxuICAgICAgNzUsXG4gICAgICAxNDksXG4gICAgICAyNTUsXG4gICAgICAxNzQsXG4gICAgICAyOCxcbiAgICAgIDI1LFxuICAgICAgMTg1LFxuICAgICAgMTcxLFxuICAgICAgMzYsXG4gICAgICAxMDIsXG4gICAgICAxMDUsXG4gICAgICAyMDksXG4gICAgICAxMjIsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUVEWlcxQk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwMTU1NTgwMToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3NTY2NDQ1MzY1NTU6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT200bzU4REVQUG1tN3dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhVGJaTFN6a256K1BMUTBvQjlHMFZtVmhjcDJoUi9yeWtGZXlWR1ZjeG4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklXNjFSdzdpT0NVcTBsekozOVlPUHJqMks2anVjVEVBYnVONzRjdVVNZlQ1RW10N0IzN2JBK0ZxTUdETzJ4SGV0Rnh2RjhjZHVhZWUvM0xkb3dUSkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitReFFaMHNPakRxS1lHUVUzbFJkZGpkY0xnbktFc2I1TjJZVzVuVTlPRTRad2piQVA4SnhraktoZmhpSWptY3AxdEk3VStwckh5UnFnZnNrV3dMUWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwMTU1NTgwMToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjg5NzQwMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "aguti-dev",
  packname: process.env.PACK_NAME || "aguti-dev",
  botname : process.env.BOT_NAME  || "aguti-dev",
  ownername:process.env.OWNER_NAME|| "aguti-dev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEBAPI : process.env.KOYEB_API  || "false",

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
