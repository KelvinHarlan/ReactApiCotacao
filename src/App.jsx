import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [coin, setCoin] = useState([]);
  const [typeCoin, setTypeCoin,] = useState([]);
  const [nameCoin, setNameCoin] = useState([]);
  const [coin01Selected, setCoin01Selected] = useState('');
  const handleChangeCoin01 = ({target})=>{setCoin01Selected(target.value)};


  useEffect(() => {
    const url = `https://economia.awesomeapi.com.br/json/available/uniq`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTypeCoin(Object.keys(data))
        setNameCoin(data)
      })
  }, [])



  useEffect(() => {
    const url = `https://economia.awesomeapi.com.br/json/last/${coin01Selected}-EUR`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCoin(data)
        console.log(data)
      })
  }, [typeCoin])



  return (
    <>
      <h2>Olá</h2>
      <select onChange={handleChangeCoin01} value={coin01Selected} name="coin01" id="coin01">
        <option value="0">Selecione uma moeda</option>
        {typeCoin.map(el=>(
          <option key={el} value={el}>{nameCoin[el]}</option>
        ))}
      </select>
      
    </>
  )
}

export default App
