import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count is:{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  )
}
