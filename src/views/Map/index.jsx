import React, { useEffect, useState } from 'react';

import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import Map from 'ol/Map';
// import LayerGroup from 'ol/layer/Group';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import View from 'ol/View';

import './map.css';

const MapComponent = () => {
  const [map, setMap] = useState();

  const [selected, setSelected] = useState('province');

  const URLS = {
    province: 'https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}',
    district: 'https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}',
    municipality: ' https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}',
  };

  useEffect(() => {
    const initialMap = new Map({
      target: 'map',
      view: new View({
        center: fromLonLat([84.28, 28.41]),
        zoom: 7,
      }),
    });
    setMap(initialMap);
  }, []);

  useEffect(() => {
    const federal = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: URLS[selected],
      }),
    });
    if (map) {
      map.addLayer(federal);
    }
  }, [map, URLS, selected]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <div className="grid-container">
        <div className="grid-1">
          <div className="sidebar">
            <h3>Layers</h3>
            <input
              className="visible"
              type="radio"
              value="province"
              onChange={handleChange}
              checked={selected === 'province'}
            />{' '}
            Province{' '}
            <input
              className="visible"
              type="radio"
              value="district"
              onChange={handleChange}
              checked={selected === 'district'}
            />{' '}
            District{' '}
            <input
              className="visible"
              type="radio"
              value="municipality"
              onChange={handleChange}
              checked={selected === 'municipality'}
            />{' '}
            Municipality{' '}
          </div>
        </div>
        <div className="grid-2">
          <div id="map" className="map" />
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
