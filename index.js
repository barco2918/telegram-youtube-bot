const { Telegraf } = require('telegraf');

// El token lo obtienes de BotFather y lo pones como variable de entorno en Render
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

bot.launch();