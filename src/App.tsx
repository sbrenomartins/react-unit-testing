import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Diego", "Rodz", "Mayk"]);

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeFromList(removeItem: string) {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== removeItem));
    }, 500);
  }

  return (
    <>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Novo Item"
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
