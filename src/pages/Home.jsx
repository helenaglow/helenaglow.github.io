import { useState } from "react";
import flower from "../assets/flower.svg";
import flowerGroup from "../assets/group-flower.svg";
import lilyFlower from "../assets/lily-flower.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen grid flex flex-row md:flex-col p-16 pt-32 md:p-32">
      <div className="h-3/4 w-full flex flex-col md:flex-row justify-content-center space-4 ">
        <div className="h-3/5 w-full md:w-3/5 md:h-full ">
          <div className="w-full h-full flex flex-col justify-center">
            <p className="text-h1 text-dark-green">Hello</p>
            <p className="text-h1 text-sage">I'm Helena!</p>
            <p className="text-main pt-2">
              Welcome to my swamp.{" "}
              <span className="italic">
                It is still under construction... :)
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="h-2/5 w-full md:w-2/5 md:h-full ">
          <div className="w-full h-full flex flex-row md:flex-col md:justify-end md:items-center ">
            <img
              src={flowerGroup}
              alt="icon"
              className="w-full md:w-max md:h-max lg:w-108 lg:h-108"
            />
          </div>
        </div>
      </div>
      <div className="h-1/4 w-full flex justify-content-center ">
        <div className="h-full w-1/2 ">
          <img src={lilyFlower} alt="icon" className="h-max " />
        </div>
        <div className="h-full w-1/2 flex justify-end">
          <img src={flower} alt="icon" className="h-8 " />
        </div>
      </div>
    </div>
  );
}

export default Home;
