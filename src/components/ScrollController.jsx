// ScrollController.jsx
import React from 'react';
import OverlayScene from './OverlayScene';
import TransitionLayer from './TransitionLayer';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const ScrollController = () => {
  return (
    <>
      <OverlayScene />
      <TransitionLayer />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default ScrollController;
