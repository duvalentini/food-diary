import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map: React.FC<{searchText:string}> = ({searchText}) => {

  const [ currentPosition, setCurrentPosition ] = useState({lat: '', lng: ''});
  // const [ places, setPlaces ] = useState([]);
  // const refs = {
  //   map: React.createRef<GoogleMap>(),
  // };

  const success = (position: any) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  // const onMapMounted = () => (ref: React.RefObject<GoogleMap>) => {
  //   refs.map = ref;
  // };
  //
  // const fetchPlaces = () => {
  //   let places;
  //   const bounds = refs.map.getBounds();
  //   const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
  //   const request = {
  //       bounds: bounds,
  //       type: ['hotel']
  //   };
  //   service.nearbySearch(request, (results, status) => {
  //       if (status == google.maps.places.PlacesServiceStatus.OK) {
  //           console.log(results);
  //           setPlaces(results);
  //       }
  //   })
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <GoogleMap
      defaultZoom={15}
      center={currentPosition}
      // ref={onMapMounted}
      // onTilesLoaded={fetchPlaces}
      // onBoundsChanged={fetchPlaces}
    >
    {
      currentPosition.lat &&
      (
        <Marker position={currentPosition} />
      )
    }
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
