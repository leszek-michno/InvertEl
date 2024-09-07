import { useEffect } from 'react'
import '../assets/styles/Products.scss'
import useLocalStorage from 'use-local-storage'
import PropTypes from 'prop-types'

const Products = ({ id, name, volume, updateTotal }) => {
  const localStorageKeyUnit = `unit_${id}`
  const localStorageKeyPrice = `price_${id}`

  const [unit, setUnit] = useLocalStorage(localStorageKeyUnit, 0)
  const [price, setPrice] = useLocalStorage(localStorageKeyPrice, 0)

  useEffect(() => {
    const beerIncome = unit * price
    updateTotal(id, beerIncome)
  }, [unit, price, id, updateTotal])

  return (
    <div className="list">
      <p>{name}</p>
      <p>{volume}</p>
      <p className="unit">Ilość:</p>
      <input value={unit} onChange={(e) => setUnit(e.target.value)} type="number" min="0" />
      <p className="price">Cena netto:</p>
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="0" />
      <p className="total-price">Razem: {(unit * price).toFixed(2)}</p>
    </div>
  )
}

Products.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  updateTotal: PropTypes.func.isRequired
}

export default Products
