import React from 'react';
import { Team } from '../types';
import { Users, Trophy } from 'lucide-react';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <img 
        src={team.image} 
        alt={team.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{team.name}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span>{team.members} members</span>
        </div>
        <p className="mt-3 text-gray-600">{team.description}</p>
        <div className="mt-4">
          <div className="flex items-center">
            <Trophy className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm font-medium">Recent Achievement:</span>
          </div>
          <p className="text-sm text-gray-600 ml-6">{team.achievements[0]}</p>
        </div>
      </div>
    </div>
  );
}