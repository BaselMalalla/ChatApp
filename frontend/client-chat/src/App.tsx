import './App.css'

// src/App.tsx
// src/App.tsx
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
