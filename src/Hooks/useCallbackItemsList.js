import React, {useEffect, useState} from "react";

export default function UseCallbackItemsList({getItems}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const newItems = getItems()
    setItems(newItems)
    console.log('render')
  }, [getItems])

  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
}
