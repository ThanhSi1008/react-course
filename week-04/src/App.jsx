import { useEffect, useState } from 'react'
import Header from './components/header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fn = fetch("https://67cd350bdd7651e464eda2a9.mockapi.io/header")
      .then((res) => res.json())
      .then((data) => {console.log(data);}
      );
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default App
