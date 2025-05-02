'use client';

import type React from 'react';
import { useState } from 'react';
import QuizSection from '@/components/quiz-section';
import InvitationSection from '@/components/invitation-section';
import LoadingAnimation from '@/components/loading-animation';

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuizComplete = () => {
    setIsLoading(true);
    // Simulate loading time for the animation
    setTimeout(() => {
      setShowInvitation(true);
      setIsLoading(false);
    }, 2500); // Adjust loading time as needed (2.5 seconds)
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-secondary/30 via-background to-accent/30">
      {!showInvitation ? (
        <QuizSection onQuizComplete={handleQuizComplete} />
      ) : (
        <InvitationSection />
      )}
    </main>
  );
}
