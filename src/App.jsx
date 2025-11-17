import { useState } from "react";
import reactLogo from "./assets/flower.svg";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-white">
      <Home />
    </div>
  );
}

export default App;
