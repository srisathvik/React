import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErroPage from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const[isFetching, SetIsFetching] = useState(false);
  const[AvailablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState();
  useEffect(()=>{
    SetIsFetching(true);
    async function fetchPlaces() {
      try{
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) =>{
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces); 
          SetIsFetching(false);
        })
      }
      catch(error){
        //...
        setError(error);
        SetIsFetching(false); 
      }
      
      // setAvailablePlaces(resData.places);
    }
    fetchPlaces();

  },[]);

  if(error){
    return <ErroPage title="An Error Occured" message={error.message} />
  }

  

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="Fetching place data..."
    />
  );
}
