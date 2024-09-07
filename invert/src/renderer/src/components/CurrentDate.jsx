const CurrentDate = () => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  )
}
export default CurrentDate
