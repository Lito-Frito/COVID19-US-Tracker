import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import axios from 'axios';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

const LOCATION = {
  lat: 38,
  lng: -97,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 3.5;

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    if ( !map ) return;

    let response;

    try {
      response = await axios.get( 'https://corona.lmao.ninja/v2/jhucsse/counties' );
    } catch ( e ) {
      console.log( 'E', e );
      return;
    }
    console.log( 'response', response );

    const { data } = response;
    const hasData = Array.isArray( data ) && data.length > 0;

    if ( !hasData ) return;

    const geoJson = {
      type: 'FeatureCollection',
      features: data.map(( county = {}) => {
        const { stats = {}, coordinates = {} } = county;
        const { latitude: lat, longitude: lng } = coordinates;
        return {
          type: 'Feature',
          properties: {
            ...stats,
            ...county,
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
        };
      }),
    };

    const geoJsonLayers = new L.GeoJSON( geoJson, {
      pointToLayer: ( feature = {}, latlng ) => {
        const { properties = {} } = feature;
        let updatedFormatted;
        let casesString;

        const { county, updatedAt, confirmed, deaths, recovered } = properties;

        casesString = `${confirmed}`;

        if ( confirmed > 1000 ) {
          casesString = `${casesString.slice( 0, -3 )}K+`;
        }

        if ( updatedAt ) {
          updatedFormatted = new Date( updatedAt ).toLocaleString();
        }

        const html = `
          <span class="icon-marker">
            ${casesString}
          </span>
        `;

        const stats = `
          <span class="icon-marker-tooltip">
              <h2>${county}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${confirmed.toLocaleString()}</li>
                <li><strong>Deaths:</strong> ${deaths.toLocaleString()}</li>
                <li><strong>Recovered:</strong> ${recovered.toLocaleString()}</li>
                <li><strong>Last Update:</strong> ${updatedFormatted}</li>
              </ul>
            </span>
          </span>
        `;

        const popup = L.popup({
          maxWidth: 700,
        }).setContent( stats );

        return L.marker( latlng, {
          icon: L.divIcon({
            className: 'icon',
            html,
          }),
          riseOnHover: true,
        }).bindPopup( popup );
      },
    });

    geoJsonLayers.addTo( map );
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'Mapbox',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>COVID19 Map</title>
      </Helmet>

      <Map {...mapSettings}></Map>

      <Container type="content" className="text-center home-start">
        <h2>Zoom in to See Spread of COVID19 around the US by County</h2>
      </Container>
    </Layout>
  );
};

export default IndexPage;
