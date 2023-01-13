import { useState } from 'react'

function Header({ title }) {
  return <h1>{title ? title : 'Hello World!'}</h1>
}

export default function HomePage() {
  const [likes, setLikes] = useState(0)

  const friends = ['Gaylord', 'Sarah', 'Raphael']

  function handleClick() {
    setLikes(likes + 1)
  }
  return (
    <>
      <Header title="Develop. Preview. Ship. 🚀" />
      <p>React is a JavaScript library for building user interfaces.</p>

      <ul>
        {friends.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
      <footer>made with ❤️</footer>
    </>
  )
}
