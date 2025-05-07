#### 🚀 How To Run?

1. **Install dependencies** (from the project root):

   ```bash
   pnpm install
   ```

2. **Start the development server**:

   ```bash
   pnpm run dev
   ```

3. **Open in browser**:

   Go to: [http://localhost:5173](http://localhost:5173)

4. **Build for production**:

   ```bash
   pnpm run build
   ```

5. **Preview production build locally**:

   ```bash
   pnpm run preview
   ```

---

#### 📁 Basic Structure Overview

frontend/
└── client-chat/
    ├── node_modules/               # Auto-generated packages folder
    ├── public/                     # Static public files (favicon, index.html)
    ├── src/                        # Main source code
    │   ├── assets/                 # Images, icons, base/global CSS
    │   ├── components/             # Reusable UI components
    │   ├── features/
    │   │   ├── auth/               # Authentication feature module
    │   │   │   ├── AuthContext.tsx   # Context for auth state
    │   │   │   ├── authService.ts    # API logic (calls Python backend)
    │   │   │   ├── types.ts          # TypeScript types (User, Credentials)
    │   │   │   └── useAuth.ts        # Custom hook to use AuthContext
    │   │   └── feature-x/          # Placeholder for another domain feature
    │   ├── hooks/
    │   │   └── useLocalStorage.ts   # Custom hook for localStorage
    │   ├── pages/                  # Page components (Login, Chat, etc.)
    │   ├── routes/
    │   │   └── AppROutes.tsx       # React Router setup
    │   ├── utils/
    │   │   └── validators.ts       # Input validators (e.g., email, password)
    │   ├── App.css                 # App-specific styles
    │   ├── App.tsx                 # Root component with layout + routes
    │   ├── index.css               # Global styles (resets, Tailwind, etc.)
    │   ├── main.tsx                # Entry point (ReactDOM.render)
    │   └── vite-env.d.ts           # Vite TypeScript env declarations
    ├── .gitignore
    └── eslint.config.js

