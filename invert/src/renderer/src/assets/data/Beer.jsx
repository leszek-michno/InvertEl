import { useState } from 'react'

// Przykładowa tablica piw
export const beer = [
  { id: 1, name: 'Holba', volume: 'kega 30 L' },
  { id: 2, name: 'Zubr', volume: 'Kega 30 L' },
  { id: 3, name: 'Litovel Premium', volume: 'butelka 0,5 L' },
  { id: 4, name: 'Litovel Dark', volume: 'butelka 0,5 L' },
  { id: 5, name: 'Litovel Citron', volume: 'butelka 0,5 L' },
  { id: 6, name: 'Holba Free', volume: 'butelka 0,5 L' },
  { id: 7, name: 'Gluten Free', volume: 'butelka 0,5 L' }
]

function BeerListApp() {
  const [items, setItems] = useState(beer)
  const [newBeer, setNewBeer] = useState({ name: '', volume: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newId = items.length ? items[items.length - 1].id + 1 : 1
    const newObject = { id: newId, ...newBeer }
    setItems([...items, newObject])
    setNewBeer({ name: '', volume: '' }) // Reset input after submit
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewBeer({ ...newBeer, [name]: value })
  }

  return (
    <div>
      <h1>Beer List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newBeer.name}
          onChange={handleChange}
          placeholder="Enter beer name"
          required
        />
        <input
          type="text"
          name="volume"
          value={newBeer.volume}
          onChange={handleChange}
          placeholder="Enter volume"
          required
        />
        <button type="submit">Add Beer</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.volume}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BeerListApp
