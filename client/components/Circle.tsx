import React, { useState } from 'react'

interface Props {
  cx: number
  cy: number
  r: number
}

const Circle = ({ cx, cy, r }: Props) => {
  const [generation, setGeneration] = useState(0)

  function handleClick() {
    if (generation < 1) {
      setGeneration(generation + 1)
    }
  }

  const childRadius = r / 2
  return (
    <svg>
      <circle cx={cx} cy={cy} r={r} onClick={handleClick} />
      {generation === 1 && (
        <>
          <Circle cx={cx} cy={cy - r} r={childRadius} />
          <Circle cx={cx} cy={cy + r} r={childRadius} />
          <Circle cx={cx - r} cy={cy} r={childRadius} />
          <Circle cx={cx + r} cy={cy} r={childRadius} />
        </>
      )}
    </svg>
  )
}

export default Circle
