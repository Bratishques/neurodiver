'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NeuroTestContextType {
  isNeuroTestOpen: boolean;
  openNeuroTest: () => void;
  closeNeuroTest: () => void;
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  showResults: boolean;
  setShowResults: (show: boolean) => void;
}

const NeuroTestContext = createContext<NeuroTestContextType | undefined>(undefined);

export const useNeuroTestContext = () => {
  const context = useContext(NeuroTestContext);
  if (context === undefined) {
    throw new Error('useNeuroTestContext must be used within a NeuroTestProvider');
  }
  return context;
};

interface NeuroTestProviderProps {
  children: ReactNode;
}

export const NeuroTestProvider = ({ children }: NeuroTestProviderProps) => {
  const [isNeuroTestOpen, setIsNeuroTestOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const openNeuroTest = () => {
    setIsNeuroTestOpen(true);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const closeNeuroTest = () => {
    setIsNeuroTestOpen(false);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <NeuroTestContext.Provider value={{ 
      isNeuroTestOpen, 
      openNeuroTest, 
      closeNeuroTest, 
      currentQuestion, 
      setCurrentQuestion,
      showResults,
      setShowResults
    }}>
      {children}
    </NeuroTestContext.Provider>
  );
}; 