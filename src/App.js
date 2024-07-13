import "./App.css";
import { useEffect } from "react";
import Utils from "./utils/Utils.tsx";
import CreateCharacter from "./components/create-character/CreateCharacter.tsx";

function App() {
  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const res = await Utils.getAllCharacters();
    console.log(res);
  };

  return (
    <div className="App">
      <header style={{ width: "50%", display: "flex", margin: "auto" }}>
        <CreateCharacter />
      </header>
    </div>
  );
}

export default App;
