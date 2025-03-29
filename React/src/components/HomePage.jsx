import React from 'react';

function HomePage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Survey App</h1>
      <p>
        Navigate to the <strong>Surveys</strong> page to view available surveys. 
        Your feedback matters!
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
};

export default HomePage;