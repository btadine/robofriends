import React from 'react'
import Card from './Card'

const CardsList = ({ robots }) => {
  return robots.map((user, i) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    )
  })
}

export default CardsList
