import React, { useEffect, useRef, useState } from 'react';
import { useMathJax } from '../contexts/MathJaxContext';

// Define the type for the `as` prop to allow only valid element tags
type ElementType = 'div' | 'span' | 'h3';

interface Props {
  content: string;
  as?: ElementType; // Component can be rendered as a div, span, or h3
  className?: string; // Pass through className for styling
}

// A pure component to render HTML strings and typeset them with MathJax
const MathJaxRenderer: React.FC<Props> = ({ content, as: Component = 'div', className }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { isReady } = useMathJax();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    
    // Only proceed if MathJax is ready and the element exists
    if (!isReady || !element) {
      return;
    }
    
    // Reset error state before attempting to typeset new content
    setHasError(false);
    
    // This effect tells MathJax to typeset the content of this component.
    (window as any).MathJax.typesetPromise([element])
      .catch((err: any) => {
        console.error('MathJax Typeset Error:', err);
        // If typesetting fails, set error state to true to trigger a re-render with a fallback UI
        setHasError(true);
      });

  }, [content, isReady]); // Re-run when content changes OR when MathJax becomes ready

  // While MathJax is loading, display a placeholder.
  if (!isReady) {
    return (
        <Component className={className}>
            <span className="opacity-50 italic">Loading Math...</span>
        </Component>
    );
  }
  
  // Base classes for proper display and line breaking.
  // The arbitrary variant `[&_mjx-container[display='true']]` targets MathJax's
  // display-math elements to ensure they are rendered as blocks with vertical margin.
  const stylingClasses = "break-words leading-relaxed [&_mjx-container[display='true']]:block [&_mjx-container[display='true']]:my-4";
  const combinedClassName = `${stylingClasses} ${className || ''}`.trim();

  // If an error occurred during typesetting, render a fallback UI
  if (hasError) {
    return (
      <Component className={combinedClassName}>
        <span className="text-red-500 font-semibold" title="Failed to render mathematical formula.">[Math Error] </span>
        {/* Display the original, un-rendered content */}
        <span dangerouslySetInnerHTML={{ __html: content }} />
      </Component>
    );
  }

  // The component renders the specified container (div, span, h3)
  // and uses dangerouslySetInnerHTML to apply the content, which will then be typeset by the effect.
  return (
    <Component
      ref={containerRef as any}
      className={combinedClassName}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MathJaxRenderer;