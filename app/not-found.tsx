import React from 'react';

const Custom404: React.FC = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center overflow-hidden">
      <h2 className=" mx-auto text-3xl font-bold text-white lg:mx-0 lg:text-6xl">
        404: Page Not Found!
      </h2>
      <p className="mx-auto mb-2 mt-6 text-[0.95rem] text-sky-200 lg:mx-0 lg:text-2xl ">
        Sorry, this bun is missing its samosa&#128542;
      </p>
      <div style={bunContainerStyle}>
        <img className="bun" src="nobgbun.png" alt="Bun" style={bunStyle} />
      </div>
    </div>
  );
};
const bunContainerStyle: React.CSSProperties = {
  width: '4rem',
  height: '4rem',
  animation: 'heartbeat 1s ease infinite, spin 1s linear infinite'
};

const bunStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  animation: 'wiggle 1s ease-in-out infinite'
};

export default Custom404;
