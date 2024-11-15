import React, { useState, useEffect } from 'react';
import { PerformanceCard } from '../components/PerformanceCard';
import { teams } from '../data';
import { useAuth } from '../context/AuthContext';
import { Vote } from '../types';

export function Performances() {
  const { user } = useAuth();
  const [votes, setVotes] = useState<Vote[]>(() => {
    const saved = localStorage.getItem('votes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (performanceId: string, category: string) => {
    if (!user) return;

    const newVote: Vote = {
      userId: user.id,
      performanceId,
      category,
      timestamp: Date.now(),
    };

    setVotes(prev => [...prev, newVote]);
  };

  const hasVoted = (performanceId: string) => {
    if (!user) return false;
    return votes.some(vote => 
      vote.userId === user.id && 
      vote.performanceId === performanceId
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Performances</h1>
        
        {['classical', 'contemporary', 'jazz'].map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
              {category} Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.map(team => 
                team.performances
                  .filter(perf => perf.category === category)
                  .map(performance => (
                    <PerformanceCard
                      key={performance.id}
                      performance={performance}
                      teamName={team.name}
                      onVote={() => handleVote(performance.id, category)}
                      hasVoted={hasVoted(performance.id)}
                    />
                  ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}