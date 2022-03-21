import React, {useState, useEffect, useRef} from "react";

function App() {
  // const [renderCount, setRenderCount] = React.useState(1);
  const [value, setValue] = React.useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++
  })

  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current} {value}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-primary" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
