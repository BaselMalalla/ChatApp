// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => (
    <Routes>
        {/* Redirect from the root "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
)

export default AppRoutes
