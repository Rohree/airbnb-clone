import React from "react"
import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import Card from "./components/Card.jsx"
import data from "./components/data.jsx"


function App() {
  const cards = data.map(item => {
    return (
      <Card
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
      />
    )
  })
  return (
    <>
      <NavBar/>
      <Hero />
      <section className="card--list">
          {cards}
      </section>
    </>
  )
}

export default App
