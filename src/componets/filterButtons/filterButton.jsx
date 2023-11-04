import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../router/router'
import { filterAccommodationByCategory, getCategories } from '../../services/accommodationService';

const categoriesIcon = {
    beach: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-beach" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"></path>
        <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z"></path>
        <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"></path>
        <path d="M15 9l-3 5.196"></path>
        <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25"></path>
    </svg>,
    mountain: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mountain" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"></path>
        <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"></path>
    </svg>,
    camping: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tent" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6"></path>
    </svg>,
    all: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-skyscraper" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 21l18 0"></path>
        <path d="M5 21v-14l8 -4v18"></path>
        <path d="M19 21v-10l-6 -4"></path>
        <path d="M9 9l0 .01"></path>
        <path d="M9 12l0 .01"></path>
        <path d="M9 15l0 .01"></path>
        <path d="M9 18l0 .01"></path>
    </svg>
}

const Filterbutton = () => {
    const { category, accommodations: { accommodationsDispatch } } = useContext(AppContext);
    const { categories, setCategories } = category;

    useEffect(() => {
        getCategories().then(response => setCategories(response))
    }, []);

    const handleFilterAccommodations = async (categoryId = '') => {
        const action = {
            type: 'FILTER',
            payload: null
        };
        if (categoryId) {
            const filtered = await filterAccommodationByCategory(categoryId);
            console.log(filtered);
            // action = {
            //     type: 'FILTER',
            //     payload: {
            //         filter: filtered,
            //         active: true
            //     }
            // }

            action.payload = {
                filter: filtered,
                active: true
            }
        } else {
            action.payload = {
                filter: [],
                active: false
            }
        }

        accommodationsDispatch(action)

    }

    return (
        <div>
            <button onClick={() => handleFilterAccommodations()}>
                <span>{categoriesIcon.all}</span>
                <span>All</span>
            </button>
            {
                categories.length ? categories.map(item => <button key={item.id} onClick={() => handleFilterAccommodations(item.id)}>
                    <span>{categoriesIcon[item.name === 'playa' ? 'beach' : item.name === 'montaña' ? 'mountain' : item.name]}</span>
                    <span>{item.name}</span>
                </button>) : <></>
            }</div>
    )
}

export default Filterbutton;