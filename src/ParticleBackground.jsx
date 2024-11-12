import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 380, density: { enable: true, value_area: 800 } },
        color: { value: '#00bfff' }, // Change to light blue
        shape: {
          type: 'circle',
        },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00bfff', // Change to light blue
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 6, direction: 'none', out_mode: 'out' },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div id="particles-js" style={styles.particlesContainer}></div>
  );
};

const styles = {
  particlesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000', // Black background
  },
};

export default ParticleBackground;
