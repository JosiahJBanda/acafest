import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Teams } from './pages/Teams';
import { Performances } from './pages/Performances';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminTeams } from './pages/AdminTeams';
import { AdminPerformances } from './pages/AdminPerformances';
import { AdminAnalytics } from './pages/AdminAnalytics';
import { AuthProvider } from './context/AuthContext';
import { RequireAuth } from './components/RequireAuth';
import { RequireAdmin } from './components/RequireAdmin';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/performances" element={<Performances />} />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminDashboard />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/teams"
              element={
                <RequireAdmin>
                  <AdminTeams />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/performances"
              element={
                <RequireAdmin>
                  <AdminPerformances />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <RequireAdmin>
                  <AdminAnalytics />
                </RequireAdmin>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;