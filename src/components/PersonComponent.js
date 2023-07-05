import React, { useEffect } from 'react'

function PersonComponent({ person }) {
  return (
    <li>
      <p>{person.id}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </li>
  )
}

export default PersonComponent