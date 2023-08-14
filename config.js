/*
██████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██║
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║
 ╚══▀▀═╝   ╚═════╝  ╚══════╝ ╚══════╝ ╚═╝  ╚═══╝
███╗   ██╗ ██╗ ██╗      ██╗   ██╗
████╗  ██║ ██║ ██║      ██║   ██║
██╔██╗ ██║ ██║ ██║      ██║   ██║
██║╚██╗██║ ██║ ██║      ██║   ██║
██║ ╚████║ ██║ ███████╗ ╚██████╔╝
╚═╝  ╚═══╝ ╚═╝ ╚══════╝  ╚═════╝ 
WHATSAPP BOT BY Janith sadanuwan 

WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to Queen Nilu Whatsapp Bot settings
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 


*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

/*
TO GET PASSWORD WATCH THIS =>
*/
// DONT CHANGE THIS 
global.PASSWORD = 'janith'  // Put The Password Get From Yt video  https://youtube.com/

// PUT YOUR SESSION ID HERE 

global.SESSION_ID = 'QueenNilu;;;l64F1D4I#Nz2cJhM35TcHaZJUGUObE4MYF775SHNTSDTMUG3Ia4k' // PUT your session ID BY scan QR 



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94714184446'

global.OWNER_NAME = 'Crawl_sl'

global.OPENAI_API_KEY = "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"


/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝘕𝘐𝘙𝘖𝘚𝘏𝘈𝘕 𝘔𝘋 𝘉𝘖𝘛'
 
global.STICKER_NAME = '𝘕𝘐𝘙𝘖𝘚𝘏𝘈𝘕 𝘔𝘋 𝘉𝘖𝘛' //sticker

global.LANG = 'EN' // Language (EN-  to english  ,  SI- to sinhala )

global.PREFIX = ',' // Bot Prefix

global.CAPTION = '𝘕𝘐𝘙𝘖𝘚𝘏𝘈𝘕 𝘔𝘋 𝘉𝘖𝘛 © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/d05cf62b06673d8f87603.jpg' // Set Alive Logo link

global.MAX_SIZE = '10000' // Bot Uloading Max size 

global.ANTI_BAD = false // Antibad (on = True , Off = False )

global.ONLY_GROUP = 'true' // Only group mode

global.INBOX_BLOCK = 'off'  // TO Inbox Block On put "on"

global.ANTI_LINK = 'true' //Anti Bad (on = True , Off = False )

global.TIMEZONE = 'Asia/Colombo' 

global.SEX_DL = 'true' // 18 + video dl

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.ANTI_BAD_ACTION = false

global.GROUP_LINK = 'https://chat.whatsapp.com/Jojrdp5D3X5DJnuJyaGXes' 

module.exports = {

MAX_SIZE: 100,

};
