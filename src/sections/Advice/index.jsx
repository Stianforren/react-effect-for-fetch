import { useEffect, useState } from "react"

function AdviceSection() {

  const adviceURL = "https://api.adviceslip.com/advice"

  const [favouriteAdvice, setFavourite] = useState([])
  const [advice, setAdvice] = useState()
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch(adviceURL);
    const jsonData = await response.json();
    setAdvice(jsonData)
  }

  const saveToFavourite = async () => {
    setFavourite([...favouriteAdvice, advice])
  }

  return (
  <section>
    <h2>Advice Section</h2>
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice ? advice.slip.advice : "loading..."}</p>
      <button onClick={fetchData}>Get More Advice</button>
      <button onClick={saveToFavourite}>Save to Favourties</button>
    </section>
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
        <ul>
          {favouriteAdvice.map((quote) => (
            <li key={quote.slip.id}>{quote.slip.advice}</li>
          ))}
        </ul>
    </section>
  </section>
  )
}

export default AdviceSection
