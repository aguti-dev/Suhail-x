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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "233247923525" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_10_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWVJNUEFwQ0w1L1ZLNFlJdVpxNTRPVHF5SldjRk1HSDluaFF5WW1zdW9aQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDc5MjM1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ0QTdBNjUyQ0E2ODFBNTdFRDBCN0YwRTFCQUU1MzQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTU3NzQxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDI0QjRGRjVGMDcyRTRGNDY0NTk0RDFBQzMyNDQ5MERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NTc3NDE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjQ3OTIzNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RTdDNzBBRDExOEJEQzhFMzAxMEY5REYxQzMzODRDOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk1Nzc0MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDc5MjM1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4RDYwM0E2MDMxODBCQjY5MkFGREE1OTBCRTk5MjQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTU3NzQyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxcnFDX3FKX1RTYTY3cTJFeWszQ0FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxODMyOWYyLWU4NGUtNDVlMi1iMjE1LTI1YWMzNDk3MWJkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDY2LFxuICAgICAgMTY5LFxuICAgICAgNDEsXG4gICAgICAyOCxcbiAgICAgIDE3OSxcbiAgICAgIDg2LFxuICAgICAgMTk2LFxuICAgICAgMjMwLFxuICAgICAgMzksXG4gICAgICAxNzgsXG4gICAgICAxNyxcbiAgICAgIDIwNSxcbiAgICAgIDIzMSxcbiAgICAgIDQ0LFxuICAgICAgODYsXG4gICAgICAyNDEsXG4gICAgICAxMzQsXG4gICAgICA3MSxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxODQsXG4gICAgICAyNTUsXG4gICAgICA3NyxcbiAgICAgIDE3OSxcbiAgICAgIDQ1LFxuICAgICAgMjA2LFxuICAgICAgODMsXG4gICAgICAyMDcsXG4gICAgICA1LFxuICAgICAgMzAsXG4gICAgICA5NixcbiAgICAgIDc0LFxuICAgICAgNTksXG4gICAgICAyNSxcbiAgICAgIDE3NCxcbiAgICAgIDIxNixcbiAgICAgIDE5MSxcbiAgICAgIDIzNixcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldHOFAzQVlSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDc5MjM1MjU6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzE1OTMwODU4NzE1Njo4NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4eyIPCfh7cg8J+HvCDwn4euIPCfh7Eg8J+HsVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEOW8vTUZFTUdEM2JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2o2U0VoSVpmTlI0S0Y4c29iYUduL1F0WHlaUW4renB3MlM1dkVvdjlHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyN2F5VUJJb1FZQ1lpVVZtanlIenMwdDhwTVYwS3dxTENjVUlaOVJSNVJ3N0srYkFXRXBXbm1RNm12NXVWK01JRDNQOE14bmpCTlFyUlZGaWY2YVdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMWnZZenBOTGNLaVZxdCtsQ2E3UHg0SmpKMnFRalVPbUI2U3JUT2F0bHdVdEY5ZzVTT2tDY3JwZW03dGdyczJKbU9IVXFkejVPRk1hSTZIU3VVVHJodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTU3NzQxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNiS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2JLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK1phV002UkxzVjEzSWpWak02eHprdVVxSm83bGpqbDdHdzZPcjUvdXBHOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTgzOTM5MzEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk1Nzc0MTY5NjFcIn0iCn0="  // PUT your SESSION_ID 


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
