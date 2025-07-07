import React, { useEffect, useRef, useState } from "react";
import { AnimatorProps } from "./BaseAnimator";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  char: string;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

/**
 * Particle animator component that creates an explosion of particles
 * when the number changes
 */
const ParticleAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  previousValue,
  color,
  duration,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number | null>(null);

  const [prevFormatted, setPrevFormatted] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize particles when value changes
  useEffect(() => {
    if (prevFormatted && prevFormatted !== formattedValue) {
      initParticles();
      setIsAnimating(true);
      startTimeRef.current = null;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = requestAnimationFrame(animateParticles);
    }

    setPrevFormatted(formattedValue);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [formattedValue]);

  // Initialize particles based on previous value
  const initParticles = () => {
    if (!containerRef.current) return;

    const particles: Particle[] = [];
    const chars = prevFormatted.split("");
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const charWidth = containerWidth / chars.length;

    // Create particles for each character
    chars.forEach((char, index) => {
      const baseX = index * charWidth + charWidth / 2;

      // Create multiple particles for each character
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: baseX,
          y: containerHeight / 2,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          size: 10 + Math.random() * 10,
          char,
          opacity: 1,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
        });
      }
    });

    particlesRef.current = particles;
  };

  // Animate particles
  const animateParticles = (timestamp: number) => {
    if (!canvasRef.current || !containerRef.current) {
      animationRef.current = requestAnimationFrame(animateParticles);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      animationRef.current = requestAnimationFrame(animateParticles);
      return;
    }

    // Set canvas size to match container
    canvas.width = containerRef.current.offsetWidth;
    canvas.height = containerRef.current.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Initialize start time
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    // Calculate elapsed time
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Update and draw particles
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Update opacity based on progress
      particle.opacity = 1 - progress;

      // Update rotation
      particle.rotation += particle.rotationSpeed;

      // Draw particle
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${particle.opacity})`;
      ctx.fillText(particle.char, 0, 0);
      ctx.restore();
    });

    // Continue animation or end
    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animateParticles);
    } else {
      setIsAnimating(false);
    }
  };

  return (
    <div ref={containerRef} className="rc-animated-number-particle">
      {/* Display current value */}
      <span className="rc-animated-number-particle-value">
        {formattedValue}
      </span>

      {/* Canvas for particle animation */}
      {isAnimating && (
        <canvas
          ref={canvasRef}
          className="rc-animated-number-particle-canvas"
        />
      )}
    </div>
  );
};

export default ParticleAnimator;
