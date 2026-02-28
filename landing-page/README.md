# GlobalTech Industries — Web Project

## 📁 Структура проекта

```
globaltech/
├── index.html              ← Главная страница (standalone HTML)
├── css/
│   └── main.css            ← Все стили (вынесены из HTML)
├── js/
│   └── main.js             ← Весь JavaScript + WordPress API интеграция
├── assets/                 ← Ваши SVG/изображения (3.svg, 4.svg...)
└── wordpress-theme/        ← Готовая WordPress тема
    ├── style.css           ← Заголовок темы (обязателен для WP)
    ├── functions.php       ← Подключение скриптов, REST API, CPT
    ├── header.php          ← Шапка сайта (навигация)
    ├── footer.php          ← Подвал
    ├── front-page.php      ← Главная страница (лендинг)
    ├── index.php           ← Блог/архив постов
    └── single.php          ← Шаблон отдельного поста
```

---

## 🚀 Вариант 1: Standalone HTML (без WordPress)

1. Откройте `js/main.js`
2. Найдите переменную `WP_CONFIG`:
   ```js
   const WP_CONFIG = {
       apiUrl: '',      // ← оставьте пустым
       enabled: false   // ← false = без WordPress
   };
   ```
3. Загрузите папку `globaltech/` на хостинг
4. Готово! Блог покажет демо-карточки, форма — симуляцию отправки

---

## 🔌 Вариант 2: Подключение WordPress (Headless / REST API)

Используйте этот HTML как фронтенд, а WordPress — как CMS для постов.

### Шаги:
1. Установите WordPress на поддомен (например: `cms.yoursite.com`)
2. Установите плагин для CORS: **WP CORS** или добавьте в `wp-config.php`:
   ```php
   header("Access-Control-Allow-Origin: https://yoursite.com");
   ```
3. Откройте `js/main.js` и укажите URL:
   ```js
   const WP_CONFIG = {
       apiUrl: 'https://cms.yoursite.com/wp-json/wp/v2',
       enabled: true,
       postsPerPage: 3
   };
   ```
4. Проверьте: `https://cms.yoursite.com/wp-json/wp/v2/posts` — должны вернуться посты

---

## 🏠 Вариант 3: Полная WordPress тема

Используйте для размещения на WordPress хостинге.

### Установка:
1. Скопируйте папку `wordpress-theme/` в `/wp-content/themes/globaltech/`
2. Скопируйте также `css/` и `js/` в папку темы:
   ```
   /wp-content/themes/globaltech/
   ├── css/main.css
   ├── js/main.js
   ├── assets/       ← ваши изображения
   ├── style.css
   ├── functions.php
   ├── header.php
   ├── footer.php
   ├── front-page.php
   ├── index.php
   └── single.php
   ```
3. В **WP Admin → Внешний вид → Темы** активируйте тему **GlobalTech Industries**
4. В **WP Admin → Настройки → Чтение** выберите:
   - "Ваша главная страница отображает" → Статичную страницу
   - Главная страница → создайте страницу "Home"
   - Страница записей → создайте страницу "Blog"
5. Форма контактов отправляет письма на `admin_email` WordPress

### Настройка контактных данных (Кастомизатор):
WP Admin → Внешний вид → Настроить:
- `gt_email` — email компании
- `gt_china_address` — адрес офиса в Китае
- `gt_uz_address` — адрес офиса в Узбекистане
- `gt_linkedin` — URL LinkedIn страницы

---

## 🌍 Мультиязычность

- **Standalone**: работает автоматически, JS переключает EN/RU/UZ
- **WordPress + WPML/Polylang**: кнопки языков в `header.php` автоматически используют WPML API

---

## 📧 Форма обратной связи

- **Standalone**: симуляция (настройте endpoint в `WP_CONFIG.contactEndpoint`)
- **WordPress**: встроен кастомный REST endpoint `/wp-json/globaltech/v1/contact`
  - Отправляет email администратору
  - Сохраняет заявку как приватный пост типа `gt_inquiry`
  - Просматривать заявки: WP Admin → Inquiries

---

## 🔧 Зависимости

- Google Fonts (Inter) — подключается из CDN
- Нет npm/webpack/build step — чистый HTML/CSS/JS
- WordPress 6.0+ (если используете тему)
- PHP 8.0+ (для WordPress)
