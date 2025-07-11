import React from 'react';
import { ParallaxProvider as ScrollParallaxProvider } from 'react-scroll-parallax';

export default function ParallaxProvider({ children }) {
  return <ScrollParallaxProvider>{children}</ScrollParallaxProvider>;
}