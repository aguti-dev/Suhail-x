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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_56_01_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJakZ1bGhtbEJnMFVyRWhCenlYWjZ4QUV6Nk9jeHRRd1VOY0x2Mk1iTWJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzIwMTU1NTgwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ZCNTIxRTdEMEVERjM2QzBFOTM1QjIyODY1MTI5MTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM2NDIzODAwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFKX0pIQjNUVEx1b2IwdzUtYWU4X2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzZlYTQ1NWItYTkyOS00NTVjLWE3M2ItZmQwYzBkNzY4MTZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMjI0LFxuICAgICAgMTgxLFxuICAgICAgMTM4LFxuICAgICAgMTQzLFxuICAgICAgMTI1LFxuICAgICAgNTgsXG4gICAgICA2MCxcbiAgICAgIDEwMyxcbiAgICAgIDIxNyxcbiAgICAgIDIyMixcbiAgICAgIDEyMixcbiAgICAgIDcsXG4gICAgICAyMjAsXG4gICAgICAxMzQsXG4gICAgICAxNDAsXG4gICAgICAxOCxcbiAgICAgIDIyNCxcbiAgICAgIDg3LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE0OCxcbiAgICAgIDE4NSxcbiAgICAgIDExNCxcbiAgICAgIDU0LFxuICAgICAgNjAsXG4gICAgICAxMyxcbiAgICAgIDI0MCxcbiAgICAgIDE4LFxuICAgICAgMTEyLFxuICAgICAgMjMwLFxuICAgICAgMTg5LFxuICAgICAgMTU5LFxuICAgICAgMTcwLFxuICAgICAgMjMwLFxuICAgICAgMTQyLFxuICAgICAgNzIsXG4gICAgICAxNSxcbiAgICAgIDE0NSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHWlM0V0ozTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjAxNTU1ODAxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDc1NjY0NDUzNjU1NToyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZS+8J2UuPCdlLnwnZS8IPCdlYTwnZWA8J2UvuKEjfCdlYvwn6STXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2k0bzU4REVQRHkvcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhVGJaTFN6a256K1BMUTBvQjlHMFZtVmhjcDJoUi9yeWtGZXlWR1ZjeG4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVyMDVvbUhqOVJLQURNeTUrM0hXYnpWVlJWT3ZtT2tnQ2ZMbWxSZytqbU5rbnVPbnRGQ3dsRkhQeFNldTFOem1KZDhuVWRnOTg4dGpwbG9nMHNtakRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdKcElyTlpwaVhCL3NYSzhockNhU0Y0L253NGhqLzh0NVVhTks3QnhhSm5tTUZYK1dCZ1FVbEt1eHA3YUY5RkdEL1lWVVpNWVZhemhLenBDWW5Dd2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwMTU1NTgwMToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjQyMzc5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUwclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTByLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3FvK0JzL3hyU3BtcnBiVUg3dkQwWTcrcTJyNXN1VWp1REttNThzYVJTcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzA4OTg3OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNjQyMzgwMDQ2MlwifSIKfQ=="  // PUT your SESSION_ID 


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
