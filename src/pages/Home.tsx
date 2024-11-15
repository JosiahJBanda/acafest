import React from 'react';
import { Mic, Calendar, Trophy, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            VocalFest 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the magic of pure vocal harmony at the world's premier acappella festival
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Users className="h-8 w-8" />,
              title: '12 Teams',
              description: 'Top acappella groups from around the world'
            },
            {
              icon: <Mic className="h-8 w-8" />,
              title: '3 Categories',
              description: 'Classical, Contemporary, and Jazz'
            },
            {
              icon: <Calendar className="h-8 w-8" />,
              title: '3 Days',
              description: 'Of pure vocal magic and harmony'
            },
            {
              icon: <Trophy className="h-8 w-8" />,
              title: 'Vote Now',
              description: 'Support your favorite performances'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-indigo-600 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the magic?</h2>
          <p className="mb-6">Join us for three days of extraordinary vocal performances</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            View Schedule
          </button>
        </div>
      </div>
    </div>
  );
}