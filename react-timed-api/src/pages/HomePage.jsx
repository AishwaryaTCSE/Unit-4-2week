import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    if (showConfirmation && timer > 0) {
      countdown = setTimeout(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      setShowConfirmation(false);
      setTimer(10);
    }

    return () => clearTimeout(countdown);
  }, [showConfirmation, timer]);

  const handleFetchClick = () => {
    setShowConfirmation(true);
    setTimer(10);
  };

  const handleNo = () => {
    setShowConfirmation(false);
    setTimer(10);
  };

  const handleYes = () => {
    navigate('/data');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {!showConfirmation && (
        <button onClick={handleFetchClick}>Fetch Data</button>
      )}

      {showConfirmation && (
        <div>
          <h3>Are you sure you want to fetch the data?</h3>
          <h1 style={{ color: timer > 5 ? 'green' : 'red' }}>{timer}</h1>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo} style={{ marginLeft: '10px' }}>No</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
