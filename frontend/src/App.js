import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch("http://13.218.147.9:5000")
      .then((res) => res.text())
      .then((data) => setData(data))
      .catch(() => setData("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cloud Deployment Test 🚀</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;