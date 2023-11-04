import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../router/router'
import { getAccommodationsWihtCategories } from '../../services/accommodationService';
import Card from '../../componets/card/card';
import './home.scss';
import Filterbutton from '../../componets/filterbuttons/filterbutton';


const Home = () => {
  const { accommodations } = useContext(AppContext);
  const { accommodationsDispatch } = accommodations;
  const { accommodationList, filteredAccommodation, activeFilter } = accommodations.accommodations;

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getAccommodationsWihtCategories().then((response) => {
      accommodationsDispatch({
        type: 'FILL',
        payload: response
      })
    })
  }, [])



  return (
    <main className='home'>
      <button onClick={() => setShowForm(!showForm)}>Comentarios</button>
      {
        showForm?<div>Este es un formulario</div>:<></>
      }
      <Filterbutton />
      {
        activeFilter ? (
          <section className='home__cards'>
            {
              filteredAccommodation.length ? filteredAccommodation.map(item => <Card key={item.id} accommodation={item} />) : <div>No hay resultado para esta búsqueda</div>
            }
          </section>
        ) : (
          <section className='home__cards'>
            {
              accommodationList.length ? (
                accommodationList.map(item => <Card key={item.id} accommodation={item} />)
              ) : <div>...Cargando</div>
            }
          </section>
        )
      }

    </main>
  )
}

export default Home