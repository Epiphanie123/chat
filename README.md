# React Chat Frontend

A modern, human-friendly chat dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- **Clean and Readable UI**: Inspired by modern messaging apps with a focus on usability.
- **TypeScript**: For robust, type-safe code.
- **Tailwind CSS**: For rapid, utility-first styling.
- **Component-Based Architecture**: Following the provided project structure for maintainability.
- **State Management**: Using React Context for simple and effective state management.
- **Persistent State**: Chat history is saved to local storage.

## How to Run

1.  **Clone the repository** (or copy the code into your own project).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Next Steps for Full Functionality

This is a frontend application. To make it a fully functional, real-time chat application, you would need to:

1.  **Build a Backend Server**: Use Node.js, Python, Go, etc., with a framework like Express or FastAPI.
2.  **Implement Real-Time Communication**: Use WebSockets (e.g., with `socket.io` or `ws`) to push messages between clients instantly. The `sendMessage` function in `ChatContext` would be modified to emit a WebSocket event instead of just updating local state.
3.  **Integrate a Database**: Store users, messages, and chat rooms in a database like PostgreSQL, MongoDB, or Firebase.
4.  **Implement Video/Audio Calls**: Integrate a WebRTC service like Twilio, Agora, or build your own solution using libraries like `simple-peer` for peer-to-peer connections. The call buttons in the `ChatWindow` header would initiate the WebRTC connection process.
5.  **Add User Authentication**: Implement a login/signup system to manage user accounts.






<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->
