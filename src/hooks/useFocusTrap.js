import { useEffect, useRef } from 'react';

// Very small focus-trap hook: focuses the first focusable element inside the container
// and keeps focus cycling inside while active. Not a complete library replacement,
// but sufficient for simple modals.
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '*[tabindex]:not([tabindex="-1"])',
  '*[contenteditable]'
].join(',');

export default function useFocusTrap(isActive) {
  const containerRef = useRef(null);
  const previousActiveRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    previousActiveRef.current = document.activeElement;

    const focusable = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS)).filter(Boolean);
    if (focusable.length) {
      focusable[0].focus();
    } else {
      // If nothing focusable, set tabindex on container
      container.setAttribute('tabindex', '-1');
      container.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        const focusableNow = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS)).filter(Boolean);
        if (focusableNow.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusableNow[0];
        const last = focusableNow[focusableNow.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      // restore previous focus
      try {
        if (previousActiveRef.current && previousActiveRef.current.focus) previousActiveRef.current.focus();
      } catch (err) {
        // ignore
      }
      if (container.getAttribute('tabindex') === '-1') container.removeAttribute('tabindex');
    };
  }, [isActive]);

  return containerRef;
}
