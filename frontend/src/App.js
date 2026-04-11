import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;