import React from 'react';
import { BarChart3, TrendingUp, Eye } from 'lucide-react';
import { teams } from '../data';

export function AdminAnalytics() {
  // Mock analytics data
  const analytics = {
    totalVotes: 1234,
    totalViews: 5678,
    categoryBreakdown: {
      classical: 400,
      contemporary: 500,
      jazz: 334
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Votes</h3>
            <BarChart3 className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{analytics.totalVotes}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Views</h3>
            <Eye className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{analytics.totalViews}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Engagement Rate</h3>
            <TrendingUp className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {((analytics.totalVotes / analytics.totalViews) * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Votes by Category</h2>
        <div className="space-y-4">
          {Object.entries(analytics.categoryBreakdown).map(([category, votes]) => (
            <div key={category}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 capitalize">{category}</span>
                <span className="text-gray-900 font-semibold">{votes} votes</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{
                    width: `${(votes / analytics.totalVotes) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Performance Table */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Votes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teams.map((team) => (
                <tr key={team.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{team.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Math.floor(Math.random() * 1000)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Math.floor(Math.random() * 500)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {(Math.random() * 100).toFixed(1)}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}