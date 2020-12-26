import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function HomePage() {
  return (
    <Router>
      <h1>Pages:</h1>
      <Link to={`/serverList`}>
        <button>Server List</button>
      </Link>
      <Link to={`/createServer`}>
        <button>Create Server</button>
      </Link>
      <Link to={`/updateServer`}>
        <button>Update Server</button>
      </Link>
      <Link to={`/deleteServer`}>
        <button>Delete Server</button>
      </Link>
      <br />
      <h1>Actions:</h1>
      <button onClick={() => alert("Clicked!")}>Action</button>
      <button onClick={() => alert("Clicked!")}>Action</button>
      <button onClick={() => alert("Clicked!")}>Action</button>
      <button onClick={() => alert("Clicked!")}>Action</button>
    </Router>
  );
}
