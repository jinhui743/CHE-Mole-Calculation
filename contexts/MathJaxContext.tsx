import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MathJaxContextType {
  isReady: boolean;
}

const MathJaxContext = createContext<MathJaxContextType>({ isReady: false });

export const useMathJax = () => useContext(MathJaxContext);

interface MathJaxProviderProps {
  children: ReactNode;
}

export const MathJaxProvider: React.FC<MathJaxProviderProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // MathJax script is loaded in index.html, we just need to wait for it to be ready.
    const checkReady = () => {
      if ((window as any).MathJax?.startup?.promise) {
        (window as any).MathJax.startup.promise.then(() => {
          setIsReady(true);
        });
      } else {
        // If MathJax is not yet available, check again shortly.
        setTimeout(checkReady, 50);
      }
    };
    checkReady();
  }, []);

  return (
    <MathJaxContext.Provider value={{ isReady }}>
      {children}
    </MathJaxContext.Provider>
  );
};
