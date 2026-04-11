import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

useEffect(() => {
  fetch("http://your-ec2-ip:5000")
    .then(res => res.text())
    .then(data => setMsg(data))
    .catch(err => console.error("ERROR:", err));
}, []);
  return <h1>{msg}</h1>;
}

export default App;