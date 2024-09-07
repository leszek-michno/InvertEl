import { useEffect } from 'react'
import '../assets/styles/Products.scss'
import useLocalStorage from 'use-local-storage'
import PropTypes from 'prop-types'

const Spiryt = ({ id, name, volume, updateTotalSpiryt }) => {
  const localStorageKeyUnitSpiryt = `unitSpiryt_${id}`
  const localStorageKeyPriceSpiryt = `priceSpiryt_${id}`

  const [unit, setUnit] = useLocalStorage(localStorageKeyUnitSpiryt, 0)
  const [price, setPrice] = useLocalStorage(localStorageKeyPriceSpiryt, 0)

  useEffect(() => {
    const spirytIncome = unit * price
    updateTotalSpiryt(id, spirytIncome)
  }, [unit, price, id, updateTotalSpiryt])

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

Spiryt.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  updateTotalSpiryt: PropTypes.func.isRequired
}

export default Spiryt
