import React, { useState } from 'react';
import { Performance } from '../types';
import { Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';

interface PerformanceCardProps {
  performance: Performance;
  teamName: string;
  onVote: () => void;
  hasVoted: boolean;
}

export function PerformanceCard({ performance, teamName, onVote, hasVoted }: PerformanceCardProps) {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleVoteClick = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      onVote();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={performance.videoUrl}
            title={performance.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{performance.title}</h3>
              <p className="text-gray-600">{teamName}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {performance.category}
              </span>
            </div>
            <button
              onClick={handleVoteClick}
              disabled={hasVoted}
              className={`${
                hasVoted
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              } px-4 py-2 rounded-lg flex items-center space-x-2 transition`}
            >
              <Heart className="h-4 w-4" />
              <span>{hasVoted ? 'Voted' : 'Vote'}</span>
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={onVote}
      />
    </>
  );
}