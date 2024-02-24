import React from 'react';

const Custom404: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>404: Page Not Found!</h2>
      <p style={paragraphStyle}>Sorry, this bun is missing its samosa</p>
      <div style={bunContainerStyle}>
        <img className="bun" src="bun.png" alt="Bun" style={bunStyle} />
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  marginTop: '20px', // Gap before the top navbar
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: '#86d5ff'
  
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold'
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1rem',
  marginBottom: '1rem'
};

const bunContainerStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  animation: 'heartbeat 1s ease infinite, spin 1s linear infinite'
};

const bunStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  animation: 'wiggle 1s ease-in-out infinite'
};

export default Custom404;
