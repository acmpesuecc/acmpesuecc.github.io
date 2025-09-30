'use client';

import { useEffect, useRef } from 'react';
import { clearVerificationStatus } from '../lib/auth';

interface SecurityConfig {
  onSecurityViolation?: () => void;
  enableDevToolsDetection?: boolean;
  enableDOMTamperingDetection?: boolean;
  enableConsoleProtection?: boolean;
}

export const useSecurity = (config: SecurityConfig = {}) => {
  const {
    onSecurityViolation = () => {
      clearVerificationStatus();
      window.location.reload();
    },
    enableDevToolsDetection = true,
    enableDOMTamperingDetection = true,
    enableConsoleProtection = true,
  } = config;

  const originalElements = useRef<Map<string, string>>(new Map());
  const intervalRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // If all security features are disabled, don't do anything
    if (!enableDevToolsDetection && !enableDOMTamperingDetection && !enableConsoleProtection) {
      return;
    }
    // Store original console methods
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
      info: console.info,
    };

    // Console protection
    if (enableConsoleProtection) {
      console.log = () => {};
      console.error = () => {};
      console.warn = () => {};
      console.info = () => {};
    }

    // DevTools detection
    if (enableDevToolsDetection) {
      let devtools = { open: false };
      const threshold = 200; // Increased threshold to be less sensitive

      const checkDevTools = () => {
        const heightDiff = window.outerHeight - window.innerHeight;
        const widthDiff = window.outerWidth - window.innerWidth;
        
        if (heightDiff > threshold || widthDiff > threshold) {
          if (!devtools.open) {
            devtools.open = true;
            // Add a delay before triggering violation to avoid false positives
            setTimeout(() => {
              if (devtools.open) {
                onSecurityViolation();
              }
            }, 2000);
          }
        } else {
          devtools.open = false;
        }
      };

      // Add delay before starting DevTools detection
      const startDetection = setTimeout(() => {
        const devToolsInterval = setInterval(checkDevTools, 2000); // Check less frequently
        intervalRefs.current.push(devToolsInterval);
      }, 3000); // Wait 3 seconds before starting detection

      return () => {
        clearTimeout(startDetection);
      };
    }

    // DOM tampering detection
    if (enableDOMTamperingDetection) {
      // Store checksums of critical elements
      const criticalSelectors = [
        'script[src*="calendly"]',
        '.calendly-inline-widget',
      ];

      const storeOriginalElements = () => {
        criticalSelectors.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            originalElements.current.set(selector, element.outerHTML);
          }
        });
      };

      const checkDOMIntegrity = () => {
        criticalSelectors.forEach(selector => {
          const element = document.querySelector(selector);
          const original = originalElements.current.get(selector);
          
          if (original && element && element.outerHTML !== original) {
            onSecurityViolation();
          }
        });
      };

      // Initial storage with delay to allow elements to load
      const storeElementsTimeout = setTimeout(storeOriginalElements, 5000);
      
      // Check integrity less frequently and with delay
      const domCheckInterval = setInterval(checkDOMIntegrity, 5000);
      intervalRefs.current.push(domCheckInterval);

      // MutationObserver for real-time DOM monitoring (less aggressive)
      const observer = new MutationObserver((mutations) => {
        let shouldCheck = false;
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' || mutation.type === 'attributes') {
            const target = mutation.target as Element;
            if (target.matches && criticalSelectors.some(selector => 
              target.matches(selector))) {
              shouldCheck = true;
            }
          }
        });
        
        if (shouldCheck) {
          setTimeout(checkDOMIntegrity, 1000); // Add delay before checking
        }
      });

      // Start observer with delay
      setTimeout(() => {
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: false, // Don't monitor attributes to reduce sensitivity
        });
      }, 5000);

      return () => {
        clearTimeout(storeElementsTimeout);
        observer.disconnect();
      };
    }

    // Context menu prevention
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Keyboard shortcuts prevention
    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventKeyboardShortcuts);

    // Cleanup function
    return () => {
      // Restore console methods
      if (enableConsoleProtection) {
        Object.assign(console, originalConsole);
      }

      // Clear intervals
      intervalRefs.current.forEach(interval => clearInterval(interval));
      intervalRefs.current = [];

      // Remove event listeners
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
    };
  }, [
    onSecurityViolation,
    enableDevToolsDetection,
    enableDOMTamperingDetection,
    enableConsoleProtection,
  ]);
};

export default useSecurity;