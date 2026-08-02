// Animation utilities and AOS integration

export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
  offset: number
}

export const defaultAnimationConfig: AnimationConfig = {
  duration: 600,
  delay: 0,
  easing: 'ease-out',
  offset: 120,
}

// Initialize Animate On Scroll (AOS) functionality
export function initializeAOS(config: Partial<AnimationConfig> = {}): void {
  const finalConfig = { ...defaultAnimationConfig, ...config }

  // Custom AOS implementation since we're not using the library
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: `0px 0px -${finalConfig.offset}px 0px`,
  }

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement
        const animationType = element.getAttribute('data-aos')
        const delay = parseInt(element.getAttribute('data-aos-delay') || '0')

        setTimeout(() => {
          element.classList.add('aos-animate')

          // Apply the specific animation
          switch (animationType) {
            case 'fade-up':
              element.style.opacity = '1'
              element.style.transform = 'translate3d(0, 0, 0)'
              break
            case 'fade-left':
              element.style.opacity = '1'
              element.style.transform = 'translate3d(0, 0, 0)'
              break
            case 'fade-right':
              element.style.opacity = '1'
              element.style.transform = 'translate3d(0, 0, 0)'
              break
            case 'zoom-in':
              element.style.opacity = '1'
              element.style.transform = 'scale(1)'
              break
            default:
              element.style.opacity = '1'
              element.style.transform = 'translate3d(0, 0, 0)'
          }
        }, delay)

        // Stop observing once animated
        animationObserver.unobserve(element)
      }
    })
  }, observerOptions)

  // Observe all elements with data-aos attributes
  document.querySelectorAll('[data-aos]').forEach((element) => {
    animationObserver.observe(element)
  })
}
