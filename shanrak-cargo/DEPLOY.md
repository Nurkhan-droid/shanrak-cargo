# Инструкция по размещению сайта в интернете

## Вариант 1: Netlify (Самый простой, без регистрации)

1. Откройте https://app.netlify.com/drop
2. Перетащите всю папку `shanrak-cargo` в окно браузера
3. Через несколько секунд получите ссылку вида `https://random-name.netlify.app`
4. Сайт будет доступен всем по этой ссылке

## Вариант 2: GitHub Pages

1. Создайте аккаунт на GitHub (если нет)
2. Создайте новый репозиторий (например, `shanrak-cargo`)
3. Загрузите файлы через веб-интерфейс или Git
4. Перейдите в Settings → Pages
5. Выберите branch `main` и папку `/` (root)
6. Сайт будет доступен по адресу `https://ваш-username.github.io/shanrak-cargo`

## Вариант 3: Vercel

1. Зарегистрируйтесь на https://vercel.com
2. Нажмите "New Project"
3. Импортируйте папку `shanrak-cargo`
4. Деплой произойдет автоматически

## Вариант 4: Surge.sh (через командную строку)

```bash
npm install -g surge
cd shanrak-cargo
surge
# Укажите домен (например: shanrak-cargo.surge.sh)
```

## Вариант 5: ngrok (для временного доступа)

```bash
# Установите ngrok с https://ngrok.com
# Запустите локальный сервер:
cd shanrak-cargo
python -m http.server 8000

# В другом терминале:
ngrok http 8000
# Получите публичную ссылку
```

## Рекомендация

**Самый быстрый способ**: Netlify Drop - просто перетащите папку и получите ссылку за секунды!


