import React from 'react'

export function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{ marginRight: 5, border: '1px solid black' }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div>{count}</div>
      <button
        style={{ marginLeft: 5, border: '1px solid black' }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  )
}
