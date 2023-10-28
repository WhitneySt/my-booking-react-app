import React, { useContext } from 'react'
import { AppContext } from '../../router/router'

const Home = () => {
  const { accommodations } = useContext(AppContext);
  const { accommodationsDispatch } = accommodations;

  

  return (
    <main>
      <section></section>
    </main>
  )
}

export default Home