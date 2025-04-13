## Task Filters — Vue 3 + TypeScript + PrimeVue

Поисковая страница по квартирам с фильтрацией и пагинацией. Проект реализован на Vue 3 + TypeScript с использованием архитектуры Feature Sliced Design (FSD), UI библиотеки PrimeVue, SCSS и моков API.

Проект был создан с версиями:

> **Node.js**: v22.14.0

> **npm**: v10.9.2

---

### 🚀 Установка и запуск

#### Установка зависимостей:

```bash
npm install
```

#### Запуск в режиме разработки:

```bash
npm run dev
```

Приложение откроется по умолчанию на `http://localhost:8080/`

#### Сборка для продакшена:

```bash
npm run build
```

#### Предпросмотр продакшен-сборки:

```bash
npm run preview
```

---

### 📁 Структура проекта (FSD)

```
src/
├── app/            # Инициализация приложения (роутер, глобальные стили и пр.)
├── pages/          # Страницы: поиск и карточка квартиры
├── widgets/        # Виджеты (крупные блоки UI)
├── features/       # Функции: фильтрация квартир
├── entities/       # Сущности: модель и компонент квартиры
├── shared/         # Общие модули: ui-компоненты, api, утилиты
```

---

### 🔧 Стек и зависимости

- Vue 3 Composition API
- TypeScript
- PrimeVue + PrimeIcons + CustomPreset
- Vue Router
- SCSS (с глобальными переменными и миксинами)
- Feature Sliced Design
- Vite

---

### ✅ Функциональность

- 📦 Загрузка данных квартир из локального `apartments.json`
- 🔍 Фильтрация по:
    - адресу (строка)
    - площади (от / до)
    - количеству комнат (от / до)
- 📄 Пагинация (6 карточек на страницу)(настраиваемая)
- 📱 Адаптивная вёрстка (grid + flex)
- 💡 Навигация между страницей списка и страницей детали квартиры

---

### 🗂 Прочее

- Все alias настроены в `vite.config.ts` и `tsconfig.app.json` для соответствия FSD:
    - `#app`, `#pages`, `#widgets`, `#features`, `#entities`, `#shared`
- Глобальные стили SCSS подключаются через `additionalData`
- ESLint, Prettier и Type Checking настроены через скрипты:
  ```bash
  npm run lint
  npm run format
  npm run type-check
  ```

---

### 📸 Пример данных (apartments.json)

```json
[
  {
    "id": 1,
    "address": "Астана, ул. Абая, 10",
    "area": 45,
    "rooms": 1,
    "image": "/images/apt5.jpg"
  }
  // ...ещё 84 квартир
]
```
