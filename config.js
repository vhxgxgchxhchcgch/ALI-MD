
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VS27bSBC9S69mIGHU/JMCDAxJmRZNSZREUr/BLNpk8yPxJ7JJiQq0mDmCV7lBNjmCD2NkmVMMKNuJgWQSDzBcNau7X72qelX9DqRZVGIDN6D/DuRFVCOC2yVpcgz6QKl8HxegCzxEEOgD0dDnjjoYYA7L69SmpbBJE6OBlDheqSRdwmZr3xwymR7KV+DcBXl1F0fuDwCZYcJNZqJ9Cpj9DCdrU64FORrMxSphditlXla7RQdSx1M6uwLnFhFFRZQG13mIE1yg2MDNFEXF2+g7QzygnP1wvA57ic7LpqftsBlUupZs621nIx56Rs8md7uF+zb6NoLTgCaBesgt/cSbTibkiM25MYSn0cyOijWn1rPZRD+4T/TLKEixp3s4JRFp3px3WqFHsrHt5bTtj9Y0Q0LKm2f7jDcr2gmr3u0JKfVmOiq14G3E0YI/jTXUSKJd++FyJWYmOXHNjV/rObPoxfFegmlDnEGTvSY+LV60svsveYdyJ6Kku5nZ28yhjLZMPmLWPt7iwKcWsaPDlaY7vrY5rti30Z9P8cEpaGLqli3JyexU2uHAzQZaJsTu5DaojduEGwnuKHS+0kekKn7EMotYY6K4Va/Gahw16iE36KDK5sZyXFp3HX5baTjfH+RsOjawsJ6p1K4zvk6sYCsgel+yrm2ngadH+Z2ZbKp8WQVKEwRXl4h2uNE90KfOXVDgICpJgUiUpa1NYrsAebWF3QKTS3ZBGHs7s3FoJYk39YzbFPVith1tblyLPalDZj2Ne8NRisL0lr0CXZAXmYvLEnvDqCRZ0YxxWaIAl6D/x6VQbcwFTjKCbyMP9IFECQLDUzQURPr38rdDiEiJ8vy3FBPQBX6RJWMM+qSocBdcLvAyxygMTSusxHIypTIyr8iSKjKUes1BjWojTJ6c2lGCS4KSHPQpgeNEkRcZ+tz9f3hIvCYJggI1qAmMeg1VGvI0FFlhMIAiI6o/4cGc/+yCFB/Jk4zb5DNUF/hRURInrfI4Q96Lxl82ketmVUqsJnXVdoEL0H9lxoREaVC2kVUpKtwwqrHaxgH6PopL/KXeuMDes+3L7faWhwmK4hL0gapb+2K1m7FmEh1n67VsybIhy22BX7y9iPhJJWLGeX429xrNE6TO0oEreMBqbrOaKUH6ZjWkpjA6Te21In4PpEU4HJY3DCzzYBwarM2JvbGamnN1sF8uSocaBjd8vDOWJ+s46m12lthZh85AHUzg+ATF28X6WNWH3ZDkdGBCN624ZINE5XDVevNwHbn4tbM1xc7YYyLTxyMnGxOe1jrOWNbU3TA3VMYKFishhCyRTrD06L3TCatopxs2tT7lKVlKKRzxMwVSO9YpqIRZUrkV+Nvn9kouff2NqPoU/FZX8eUYTYsUKzEQMpTIUJeT7UYXpKgFA58//PXp/cfHh/t5lmaPD/e//Pr4cF8cHx/uP73/+PnD3+BlqMTPwzx67rfo8utH+DIbn9F+SuopXa3o4Ln7CuN52v7LxFJ8w1yt+OuVG65wz4/jiSaNh8He6Sh27U3C+CjZkl6eIC374NyqP48R8bMiaZ+A1CuyS8hFVrUq1lM/+4EzVYa6/JzvGJVE/toZ32s2+HRqWmT5EJUh6AN2M5/yFuiCpJHz3CKIvDQakNtPs+7A+R9mcxijkggAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
