"""
setup_bot.py — Одноразовая настройка @vsostav_bot

Запустить ОДИН РАЗ после деплоя:
  python setup_bot.py

Требует: pip install requests
"""

import requests

TOKEN     = "ВСТАВЬ_НОВЫЙ_ТОКЕН"          # получить в BotFather после Revoke
WEBAPP_URL = "https://nasloy1.github.io/vsostav-bot/"

BASE = f"https://api.telegram.org/bot{TOKEN}"


def api(method, **kwargs):
    r = requests.post(f"{BASE}/{method}", json=kwargs)
    data = r.json()
    ok = "✅" if data.get("ok") else "❌"
    print(f"{ok} {method}: {data.get('description', 'ok')}")
    return data


print("🤖 Настройка бота @vsostav_bot...\n")

api("setMyName", name="V·Состав")

api("setMyDescription", description=(
    "🧴 Анализатор ингредиентов косметики от Завода V\n\n"
    "Вставь состав с упаковки — и узнай:\n"
    "⛔ Что вредно\n"
    "⚠️ На что обратить внимание\n"
    "✅ Что безопасно\n\n"
    "Работает с INCI-названиями и русскими наименованиями."
))

api("setMyShortDescription",
    short_description="Проверяю состав косметики на вредные ингредиенты 🧴")

api("setMyCommands", commands=[
    {"command": "start", "description": "Запустить бота"},
    {"command": "help",  "description": "Как пользоваться"},
])

# Кнопка меню — открывает Mini App
api("setChatMenuButton", menu_button={
    "type": "web_app",
    "text": "🧴 Анализатор",
    "web_app": {"url": WEBAPP_URL}
})

print("\n✅ Готово! Открой @vsostav_bot в Telegram.")
