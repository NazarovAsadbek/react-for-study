import React, {useState, useEffect} from "react";

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({x:0, y:0});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('cleaner')
    }
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>

      <button onClick={() => setType('users')} className="btn btn-primary m-1">Пользователи</button>
      <button onClick={() => setType('todos')} className="btn btn-primary m-1">TODOS</button>
      <button onClick={() => setType('posts')} className="btn btn-primary m-1">Посты</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
