"""
bot.py — Бот @vsostav_bot

Railway читает TOKEN из переменных окружения.
Локально: задай переменную среды TOKEN=... перед запуском.

Установить: pip install -r requirements.txt
Запустить:  python bot.py
"""

import os
import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

TOKEN     = os.environ["TOKEN"]
WEBAPP_URL = "https://nasloy1.github.io/vsostav-bot/"

logging.basicConfig(
    format="%(asctime)s [%(levelname)s] %(message)s",
    level=logging.INFO
)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [[
        InlineKeyboardButton(
            "🧴 Открыть анализатор",
            web_app=WebAppInfo(url=WEBAPP_URL)
        )
    ]]
    await update.message.reply_text(
        "👋 Привет!\n\n"
        "Я помогу проверить состав косметики — покажу, что вредно, "
        "что сомнительно и что безопасно.\n\n"
        "Нажми кнопку ниже или кнопку 🧴 слева от поля ввода:",
        reply_markup=InlineKeyboardMarkup(keyboard)
    )


async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "📖 Как пользоваться:\n\n"
        "1. Открой анализатор кнопкой 🧴 в меню\n"
        "2. Вставь состав с упаковки косметики\n"
        "3. Нажми «Анализировать»\n\n"
        "Поддерживаются INCI-названия и русские наименования.\n"
        "Ингредиенты — через запятую или каждый с новой строки."
    )


def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_cmd))
    logging.info("Бот @vsostav_bot запущен...")
    app.run_polling()


if __name__ == "__main__":
    main()
