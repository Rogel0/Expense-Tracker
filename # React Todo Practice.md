# React Todo Practice

## Goals
- Add todos (id, text, done)
- Toggle done, delete item
- Optional: filters (All/Active/Completed)
- Optional: localStorage persistence

## Steps
1. Open `src/App.tsx`; add `Todo` type and state (`todos`, `filter`, `inputText`).
2. Implement handlers: addTodo (skip empty), toggleTodo, deleteTodo, setFilter.
3. Render: title, input + Add button, filter buttons, list with checkbox + delete, footer count.
4. Style in `src/App.css`: center container; line-through for completed items.
5. Test: add/toggle/delete; refresh if using localStorage.
6. Nice-to-have: Enter submits; disable Add when empty; empty-state message.

## Commands
- Install deps: `npm install`
- Run dev server: `npm run dev`