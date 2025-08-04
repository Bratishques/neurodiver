'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NeuroTestContextType {
  isNeuroTestOpen: boolean;
  openNeuroTest: () => void;
  closeNeuroTest: () => void;
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

  const openNeuroTest = () => {
    setIsNeuroTestOpen(true);
  };

  const closeNeuroTest = () => {
    setIsNeuroTestOpen(false);
  };

  return (
    <NeuroTestContext.Provider value={{ isNeuroTestOpen, openNeuroTest, closeNeuroTest }}>
      {children}
    </NeuroTestContext.Provider>
  );
}; 