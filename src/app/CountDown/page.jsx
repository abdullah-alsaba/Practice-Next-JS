import React from 'react';

const page = () => {
    return (
      <div>
        <span className="countdown font-mono text-6xl">
          <span
            style={
              { "--value": 59, "--digits": 2 } /* as React.CSSProperties */
            }
            aria-live="polite"
            aria-label={counter}
          >
            59
          </span>
        </span>
      </div>
    );
};

export default page;