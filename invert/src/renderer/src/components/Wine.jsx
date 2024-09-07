import { useEffect } from 'react'
import '../assets/styles/Products.scss'
import useLocalStorage from 'use-local-storage'
import PropTypes from 'prop-types'

const Wine = ({ id, name, volume, updateTotalWine }) => {
  const localStorageKeyUnitWine = `unitWine_${id}`
  const localStorageKeyPriceWine = `priceWine_${id}`

  const [unit, setUnit] = useLocalStorage(localStorageKeyUnitWine, 0)
  const [price, setPrice] = useLocalStorage(localStorageKeyPriceWine, 0)

  useEffect(() => {
    const WineIncome = unit * price
    updateTotalWine(id, WineIncome)
  }, [unit, price, id, updateTotalWine])

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

Wine.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  updateTotalWine: PropTypes.func.isRequired
}

export default Wine
