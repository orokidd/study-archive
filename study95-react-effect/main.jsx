// This does not work as intended. The counter increments rapidly instead of once per second.
// 1, 3, 6, 10, 15, ...
// Because setInterval is called on every render, and everytime state changes it re-renders, setting up multiple intervals.
// Fix it using useEffect.
import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(count => count + 1)
  }, 1000);

  return (
    <p>{counter} seconds have passed.</p>
  );
}

// This also does not work as intended. The counter increments rapidly instead of once per second.
// Because there is no dependency array, the effect runs after every render, setting up multiple intervals.
// Fix it by adding an empty dependency array so the effect runs only once after the initial render.
export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  })

  return (
    <p>{counter} seconds have passed.</p>
  );
}

// This is the correct implementation. The counter increments once per second as intended.
// But there is a potential memory leak because the interval is never cleared.
// Meaning when the component unmounts, the interval continues to run in the background.
// And when the component remounts, a new interval is created, leading to multiple intervals running simultaneously.
// Fix it by returning a cleanup function from useEffect that clears the interval.
export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}

// Final version with cleanup function to prevent memory leaks.
export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}