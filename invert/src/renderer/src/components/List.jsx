import { useState } from 'react'
import { beer, noAlco, spiryt, wine } from '../assets/data/products'
import Products from './Products'
import NoAlco from './NoAlco'
import Spiryt from './Spiryt'
import Wine from './Wine'

const List = () => {
  const [totalValues, setTotalValues] = useState(0)
  const [totalNoAlco, setTotalNoAlco] = useState(0)
  const [totalSpiryt, setTotalSpiryt] = useState(0)
  const [totalWine, setTotalWine] = useState(0)

  const updateTotal = (itemId, income) => {
    setTotalValues(() => {
      const itemIndex = beer.findIndex((item) => item.id === itemId)
      const newIncome = income || 0
      const newArray = [...beer]
      newArray[itemIndex].income = newIncome
      const newTotalIncomeBeer = newArray.reduce(
        (accumulator, currentItem) => accumulator + (currentItem.income || 0),
        0
      )
      return newTotalIncomeBeer
    })
  }

  const updateTotalNoAlco = (itemId, income) => {
    setTotalNoAlco(() => {
      const itemIndex = noAlco.findIndex((item) => item.id === itemId)
      const newIncome = income || 0
      const newArray = [...noAlco]
      newArray[itemIndex].income = newIncome
      const newTotalIncomeNoAlco = newArray.reduce(
        (accumulator, currentItem) => accumulator + (currentItem.income || 0),
        0
      )
      return newTotalIncomeNoAlco
    })
  }

  const updateTotalSpiryt = (itemId, income) => {
    setTotalSpiryt(() => {
      const itemIndex = spiryt.findIndex((item) => item.id === itemId)
      const newIncome = income || 0
      const newArray = [...spiryt]
      newArray[itemIndex].income = newIncome
      const newTotalIncomeSpiryt = newArray.reduce(
        (accumulator, currentItem) => accumulator + (currentItem.income || 0),
        0
      )
      return newTotalIncomeSpiryt
    })
  }

  const updateTotalWine = (itemId, income) => {
    setTotalWine(() => {
      const itemIndex = spiryt.findIndex((item) => item.id === itemId)
      const newIncome = income || 0
      const newArray = [...wine]
      newArray[itemIndex].income = newIncome
      const newTotalIncomeWine = newArray.reduce(
        (accumulator, currentItem) => accumulator + (currentItem.income || 0),
        0
      )
      return newTotalIncomeWine
    })
  }

  return (
    <>
      <div>
        <h1>
          Suma całkowita netto: {(totalValues + totalNoAlco + totalSpiryt + totalWine).toFixed(2)}{' '}
          zł
        </h1>
        <h2>Piwo i cydr (netto: {totalValues.toFixed(2)} zł) </h2>
        {beer.map((item) => (
          <Products key={item.id} {...item} updateTotal={updateTotal} />
        ))}
      </div>
      <div>
        <h2>Alkohole wysokoprocentowe (netto: {totalSpiryt.toFixed(2)} zł)</h2>
        {spiryt.map((item) => (
          <Spiryt key={item.id} {...item} updateTotalSpiryt={updateTotalSpiryt} />
        ))}
      </div>
      <div>
        <h2>Wina i vermuty (netto: {totalWine.toFixed(2)} zł)</h2>
        {wine.map((item) => (
          <Wine key={item.id} {...item} updateTotalWine={updateTotalWine} />
        ))}
      </div>
      <div>
        <h2>Napoje bezalkoholowe i przkąski (netto: {totalNoAlco.toFixed(2)} zł)</h2>
        {noAlco.map((item) => (
          <NoAlco key={item.id} {...item} updateTotalNoAlco={updateTotalNoAlco} />
        ))}
      </div>
    </>
  )
}

export default List
