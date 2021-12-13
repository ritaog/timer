import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return <div>The time is: {time}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
