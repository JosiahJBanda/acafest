import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Video, BarChart3 } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Link
          to="/admin/teams"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group"
        >
          <Users className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Manage Teams</h2>
          <p className="text-gray-600">Add, edit, or remove participating teams</p>
        </Link>

        <Link
          to="/admin/performances"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group"
        >
          <Video className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Manage Performances</h2>
          <p className="text-gray-600">Upload and manage performance videos</p>
        </Link>

        <Link
          to="/admin/analytics"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group"
        >
          <BarChart3 className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Analytics</h2>
          <p className="text-gray-600">View voting and performance statistics</p>
        </Link>
      </div>
    </div>
  );
}