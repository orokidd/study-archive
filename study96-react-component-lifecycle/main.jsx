// Example of React component lifecycle using hooks
// Demonstrates mounting, updating, and unmounting phases
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Runs after first render (mount) and every update
  useEffect(() => {
    console.log("Component mounted or updated");

    // Cleanup when unmounted
    return () => {
      console.log("Component will unmount");
    };
  }, [count]); // runs whenever 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
