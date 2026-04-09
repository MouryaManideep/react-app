import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 Full Stack App</h1>

        {data ? (
          <>
            <p className="message">{data.message}</p>
            <p><b>Server:</b> {data.server}</p>
            <p><b>Time:</b> {data.time}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;