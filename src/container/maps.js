import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeoCode,
  getLatLng,
} from "use-places-autocomplete";

import {Combobox,
ComboboxInput,
ComboboxPopover,
ComboboxList,
ComboboxOption,
ComboboxOptionText,
} from "@reach/combobox"

import '@reach/combobox/styles.css';

const containerStyle = {
  width: '100%',
  height: '92vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCgSXxXZq_FKhLlFmefiD380Kn9ypZ57KE"
  })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

  return isLoaded ? (
      <div>
          <Search/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}

export default React.memo(MapContainer)


function Search(){
  const {ready, value,
  suggestions:{ status,data},
setValue,
clearSuggestions,} = usePlacesAutocomplete({
    requestOptions:{
      location:{lat: () => 43.653225,
        lng: ()=> -79.383186},
        radius:200 *1000,
    }
  })


  return( 
    <div className="search">
  <Combobox 
  onSelect={(address)=>{
    console.log(address);
  }}
  >
    <ComboboxInput value={value} onChange={(e)=>{
      setValue(e.target.value)
    }}
    disable={!ready}
    placeholder="Search here"
    />
    <ComboboxPopover>
      {status === "ok" && data.map(({id, description})=> <ComboboxOption
      key={id}
      value={description} />)}
    </ComboboxPopover>
  </Combobox>
  </div>
  )
}