import { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./timer.css";


const Timer = () => {
  const [timer, setTimer] = useState(300);
  const increment = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    handleStart();
    setTimeout(() => {
      navigate("/");
    }, 300000);
  }, []);

  const handleStart = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handleReset = () => {
    navigate("/");
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return ` ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <h4>Proceed to Payment</h4>
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttonsTimer">
          <button onClick={handleReset}>Back</button>
          <button>Pay Now</button>
          <span className="paymentText">Pay with Payment Gateway</span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
