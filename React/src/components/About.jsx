import React from 'react';

function AboutPage() {
  return (
    <div style={styles.container}>
      <h1>About the Survey App</h1>
      <p>
        My name is <strong>Dinesh D</strong>, and I developed this application to help individuals and organizations streamline the process of collecting and analyzing survey data. 
        With a user-friendly interface and powerful features, the Survey App is built to cater to a wide range of use cases.
      </p>
      <p>
        Feel free to explore the app, participate in surveys. Your feedback is invaluable and helps us improve the platform further.
      </p>
      <p>
        Thank you for visiting, and I hope you have a great experience using the Survey App!
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

export default AboutPage;