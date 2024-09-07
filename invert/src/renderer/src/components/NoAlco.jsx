import { useEffect } from 'react'
import '../assets/styles/Products.scss'
import useLocalStorage from 'use-local-storage'
import PropTypes from 'prop-types'

const NoAlco = ({ id, name, volume, updateTotalNoAlco }) => {
  const localStorageKeyUnitNoAlco = `unitNoAlco_${id}`
  const localStorageKeyPriceNoAlco = `priceNoAlco_${id}`

  const [unit, setUnit] = useLocalStorage(localStorageKeyUnitNoAlco, 0)
  const [price, setPrice] = useLocalStorage(localStorageKeyPriceNoAlco, 0)

  useEffect(() => {
    const noAlcoIncome = unit * price
    updateTotalNoAlco(id, noAlcoIncome)
  }, [unit, price, id, updateTotalNoAlco])

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

NoAlco.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  updateTotalNoAlco: PropTypes.func.isRequired
}

export default NoAlco
