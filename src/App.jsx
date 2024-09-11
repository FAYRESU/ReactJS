import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Post from "./Post";
import StateInClass from "./StateInClass";
import profile from "./assets/profile.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Post />
        <Card profile={profile} />
        <Card profile={profile} />
        <Card profile={profile} />
        <StateInClass name="Natthakan" />
      </div>
    </>
  );
}

export default App;
