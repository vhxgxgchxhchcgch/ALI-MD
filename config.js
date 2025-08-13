
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61Uy47aSBT9l1rNCJT2+4HU0hiDARtoGzBgRrMocNkYv11lg4lYzHxCr/IH2eQT+mNaWeYrRqa7Jy0lk/RI41W5Hveec+659z1I0gAjA9Wg8x5kRVBBgpolqTMEOqBbeh4qQBu4kEDQAXMzmZRqXns5xRQYFqPZQpfXsLCV2Dpketw9JLazPJ2MVXgLLm2Qldso2P0goJMcsk3fjPDOOB1aTgkXGzO/Cxea6kyE1mI+3rLTOrRafNS/BZcmIgyKIPH72R7FqICRgWoTBsXb4K80vDSGzqp/QIPZytuyLoNn+0w/F0WPN4Yr/TDb8sc7as8ob4NP6HyD82JUy5xnjPOZIQx2Rigz8oxLWUM8dE14Nx3J/f0gfIKPAz9B7shFCQlI/Wbdy74xEOnIlPLADtlTbc4VXbk58m50gsMJoquxPeSCTdai/bcBn8yDpc21jLOx03u9FmTj7l3YmihdXzJEfexOiLYRWnKs97nXwM3ixSvhf9EdDiB/4C07wBxpldla7I0Xss9ZpTkvtop98t1Q8anDcBvab4NfSgtKI0hLp8ep5NYrL6W9lp0t04Mz4+mK3LlbxpUUSgxf6Q5JWfwIpZV4cEEZm1KS95ObE19hLPf6qrkIzd0g0E8i7W6xWlhpPfJ5Nj2md/wxWmrHrtiLkyyLxnmZC92btaMvDG8pwZ5pHQ7K7ZVRiOqRCzr0pQ0K5AeYFJAEadLsMZTcBtCt5mhXIHKVF7SOdtirGFsZnc/5cGUFmn6qREvDXXrskAWHPGXbpa10jsJb0AZZke4QxsgdBpikRT1BGEMfYdD5/VqphnSB4pQgPXBBB8i0RAsiQwsCK/2G3x33kGCYZe8SREAbeEUaTxDokKJEbXB9wPdYsS9TdF9gaUaSRYGlWE3QVIrhepLK0A3F+CnpIogRJjDOQIcWeZ6SeVakL+3/B4esiFJP6zO0qsiUovTknqAqKquoPa7LCLz0ExzM5Y82SNCJPPm4UZ+l28ALCkzspMyiFLovJn85hLtdWiZkXic7tVmgAnRebSNCgsTHDbMygcVuH1RIbXiAjgcjjP4pOCqQ+8LleYipqdv40DHXm4Vo0qDB3gT6RpsOzX8rT3S9xkg0w4mywDE8xzDXm81BGySwCQa+fPzz84dPjw/3szRJHx/uf/n18eG+OD0+3H/+8OnLx78axZ65NKldRGAQYdABqinorXKk9sesKmFrMFBGvqL6CvjK/aWnnjwrzCKfxQniFt3W9oZ3qrWqS9mQtteH1UZJ+2Pd2oZijFBt3X4nCOiAvibM/TzZptFkeK50apBkDqsRbVOPsEhUUVhS2PZpes7IE/8sO2k9HrLaeLit+ZxZYimjT0rCC/qcOZuneTLM5r2WYt022VxUBTv0Oplh2s5sU8arvS5U+V7fi4PdeMR11aSq6lgx8t2onkrU8uawW8tRVa3TE4rsepAb5/I0zDOHT7eGNGatqeQMzHqqLfzZ/vjU7ddpEz1P+eC5D4Prrxeg69B8Ls9Pq/wEvDEjdWm/ivE8hv9llHVRuHGmos6W/aMX37RWY/oYeMZMXmocHVtGV63tAX/HJwkOwaXpiiyCxEuLuJnWiVukVw8Vadm4e5R46Q+SqQo1Uvwn5hHERPnaMd9pQkF+umUWaTaEeA86gPWco2o09q+VLJsTSF4aECjNN0m24PI3AoKZ8qsIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
