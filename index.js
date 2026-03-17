const { Telegraf } = require('telegraf');
const express = require("express");

// Inicializa el bot de Telegram
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.on('text', (ctx) => {
  const text = ctx.message.text;

  // Detecta enlaces de YouTube
  if (text.includes('youtube.com') || text.includes('youtu.be')) {
    ctx.reply('Haz clic en el botón para descargar tu canción:', {
      reply_markup: {
        inline_keyboard: [[{
          text: 'Descargar MP3',
          url: `https://es.savefrom.net/#url=${text}&noredirect=1`
        }]]
      }
    });
  }
});

// Lanza el bot
bot.launch();

// -----------------------------
// Servidor mínimo para Render
// -----------------------------
const app = express();

app.get("/", (req, res) => {
  res.send("Bot corriendo en segundo plano");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
