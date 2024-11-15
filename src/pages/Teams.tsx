import React from 'react';
import { TeamCard } from '../components/TeamCard';
import { teams } from '../data';

export function Teams() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Participating Teams</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}