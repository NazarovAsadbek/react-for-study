import React, {useState} from "react";
import Context from "./context";

const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodo'))
  }, 3000)
}))

function computedInitialCounter() {
  console.log('Some calculation...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(0)
  const [counter, setCounter] = useState(() => computedInitialCounter())

  const [state, setState] = useState({
    title: 'Счётчик',
    date: Date.now()
  })

  function increment(num) {
    setCounter(prevCounter => prevCounter + num)
  }

  function decrement(num) {
    setCounter(counter - num)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'Новое значение'
      }
    })
  }


  return (
    <Context.Provider>
      <div>
        <h1>Счетчик: {counter}</h1>
        <button
          onClick={() => {
            increment(1)
          }}
          className="btn btn-success"
        >Добавить
        </button>
        <button
          onClick={() => {
            decrement(1)
          }}
          className="btn btn-danger"
        >Убрать
        </button>
        <button
          onClick={updateTitle}
          className="btn btn-warning"
        >Изменить название
        </button>

        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </Context.Provider>
  );
}

export default App;
