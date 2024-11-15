import React from 'react';
import { Music, LogOut, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8" />
            <span className="font-bold text-xl">VocalFest 2024</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
            <Link to="/teams" className="hover:text-indigo-200 transition">Teams</Link>
            <Link to="/performances" className="hover:text-indigo-200 transition">Performances</Link>
            {isAdmin && (
              <Link 
                to="/admin" 
                className="flex items-center space-x-1 hover:text-indigo-200 transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            )}
            {user ? (
              <div className="flex items-center space-x-4">
                <span>Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-indigo-200 transition"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}