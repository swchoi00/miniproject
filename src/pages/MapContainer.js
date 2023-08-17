import React, { useEffect, useState } from 'react';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map && searchPlace) {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(searchPlace, placesSearchCB);
    }
  }, [map, searchPlace]);

  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      let bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      map.setBounds(bounds);
    }
  }

  function displayMarker(place) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      if (infowindow) infowindow.close();
      const newInfowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      newInfowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      newInfowindow.open(map, marker);
      setInfowindow(newInfowindow);
    });
  }

  console.log(searchPlace);

  return (
    <div
      id="myMap"
      style={{
        width: '200px',
        height: '200px',
      }}
    ></div>
  );
};

export default MapContainer;