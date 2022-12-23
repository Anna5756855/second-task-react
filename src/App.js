import { useState } from "react";
import "./App.css";
import ListItem from "./ListItem";

function App() {
  const [list, setList] = useState([]);
  const onAddBtnClick = (event) => {
    setList(list.concat(<ListItem key={new Date().toISOString()} />));
  };

  return (
    <div className="App">
      <button className="addButton" onClick={onAddBtnClick}>
        Добавить
      </button>
      <ol>{list}</ol>
    </div>
  );
}

export default App;
