import { useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {

  const [x, setx] = useState(0);

  const btnClick = () => {
    console.log("Button clicked");
    setx(x + 1);
    console.log(x);
  }

  return (
    <div>
      <button onClick={() => { btnClick() }}>Click me</button>
      <FirstComponent data={x}/>
    </div>
  );
};

export default App;
