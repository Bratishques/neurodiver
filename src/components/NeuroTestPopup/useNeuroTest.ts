import { useState } from 'react';

export const useNeuroTest = () => {
  const [isNeuroTestOpen, setIsNeuroTestOpen] = useState(false);

  const openNeuroTest = () => {
    setIsNeuroTestOpen(true);
  };

  const closeNeuroTest = () => {
    setIsNeuroTestOpen(false);
  };

  return {
    isNeuroTestOpen,
    openNeuroTest,
    closeNeuroTest,
  };
}; 