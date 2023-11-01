import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../router/router'
import { getAccommodationsWihtCategories } from '../../services/accommodationService';
import Card from '../../componets/card/card';


const Home = () => {
  const { accommodations } = useContext(AppContext);
  const { accommodationsDispatch } = accommodations;

  useEffect(() => {
    getAccommodationsWihtCategories().then((response) => {
      accommodationsDispatch({
        type: 'FILL',
        payload: response
      })
    })
  }, [])



  return (
    <main>
      <section>
        {
          accommodations.accommodations.accommodationList.length ? (
            accommodations.accommodations.accommodationList.map(item => <Card key={item.id} accommodation={item} />)
          ):<div>...Cargando</div>
        }
      </section>
    </main>
  )
}

export default Home