import React, {useState, useCallback} from "react";
import UseCallbackItemsList from "./Hooks/useCallbackItemsList";

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0;
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'green' : 'black'
  }

  const generateItemsFromAPI =useCallback( () => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [count])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>

      <UseCallbackItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
