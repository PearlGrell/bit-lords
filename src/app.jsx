"use client"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./screens/login"
import Signup from "./screens/register"
import ForgotPassword from "./screens/forgot"
import ResetPassword from "./screens/reset"
import Dashboard from "./screens/dashboard"
import SubscriptionDashboard from "./screens/subscription"
import AddSubscription from "./screens/add_sub"
import Insights from "./screens/insights"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Dashboard />} /> {/* Default route */}
        <Route path="/subscriptions" element={<SubscriptionDashboard/>}/>
        <Route path="/insights" element={<Insights/>}/>
        <Route path="/add" element={<AddSubscription/>} />
      </Routes>
    </Router>
  )
}