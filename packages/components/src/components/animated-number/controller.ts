/**
 * Animation controller for AnimatedNumber component
 * Handles the animation logic and timing
 */

interface AnimationControllerOptions {
  onUpdate: (value: number) => void;
  onComplete?: () => void;
  easing: string;
  duration: number;
  delay: number;
}

export class AnimationController {
  private startValue: number = 0;
  private endValue: number = 0;
  private startTime: number | null = null;
  private frameId: number | null = null;
  private options: AnimationControllerOptions;

  constructor(options: AnimationControllerOptions) {
    this.options = options;
  }

  /**
   * Start animation from startValue to endValue
   */
  public animate(startValue: number, endValue: number): void {
    this.startValue = startValue;
    this.endValue = endValue;

    // Clear any existing animation
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }

    this.startTime = null;

    // Start animation after delay
    if (this.options.delay > 0) {
      setTimeout(() => this.startAnimation(), this.options.delay);
    } else {
      this.startAnimation();
    }
  }

  /**
   * Update controller settings
   */
  public updateSettings(settings: Partial<AnimationControllerOptions>): void {
    this.options = { ...this.options, ...settings };
  }

  /**
   * Clean up resources
   */
  public destroy(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  /**
   * Start the animation loop
   */
  private startAnimation(): void {
    const animate = (timestamp: number) => {
      if (this.startTime === null) {
        this.startTime = timestamp;
      }

      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.applyEasing(progress);

      // Calculate current value
      const currentValue =
        this.startValue + (this.endValue - this.startValue) * easedProgress;

      // Update with current value
      this.options.onUpdate(currentValue);

      // Continue animation or complete
      if (progress < 1) {
        this.frameId = requestAnimationFrame(animate);
      } else {
        // Ensure final value is exactly the end value
        this.options.onUpdate(this.endValue);

        // Call completion callback
        if (this.options.onComplete) {
          this.options.onComplete();
        }

        this.frameId = null;
        this.startTime = null;
      }
    };

    this.frameId = requestAnimationFrame(animate);
  }

  /**
   * Apply easing function to progress
   */
  private applyEasing(progress: number): number {
    switch (this.options.easing) {
      case "linear":
        return progress;
      case "easeIn":
        return progress * progress;
      case "easeOut":
        return 1 - Math.pow(1 - progress, 2);
      case "easeInOut":
        return progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      case "elastic": {
        const c4 = (2 * Math.PI) / 3;
        return progress === 0
          ? 0
          : progress === 1
            ? 1
            : -Math.pow(2, 10 * progress - 10) *
            Math.sin((progress * 10 - 10.75) * c4);
      }
      case "bounce": {
        const n1 = 7.5625;
        const d1 = 2.75;
        if (progress < 1 / d1) {
          return n1 * progress * progress;
        } else if (progress < 2 / d1) {
          return n1 * (progress -= 1.5 / d1) * progress + 0.75;
        } else if (progress < 2.5 / d1) {
          return n1 * (progress -= 2.25 / d1) * progress + 0.9375;
        } else {
          return n1 * (progress -= 2.625 / d1) * progress + 0.984375;
        }
      }
      default:
        return progress;
    }
  }
}
