import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import Map from '../components/Map';
import './RestaurantMap.css';

const RestaurantMap: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Restaurant Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          searchText={searchText}
        />
        <IonSearchbar
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value!)}
          showCancelButton="focus"
          placeholder="Search for a restaurant"
          type="search"
          animated
        />
      </IonContent>
    </IonPage>
  );
};

export default RestaurantMap;
