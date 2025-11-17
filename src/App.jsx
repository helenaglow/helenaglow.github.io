import { useState } from "react";
import flower from "./assets/flower.svg";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full sticky top-0 overflow-hidden h-24 flex items-center px-16 md:px-32">
        <img src={flower} alt="icon" className="w-10 h-10" />
      </div>
      <div className="overflow-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
