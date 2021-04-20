import React, { useRef, useEffect } from "react";
import {
  Map,
  TileLayer,
  Circle,
  LayersControl,
  LayerGroup,
  Marker,
  Popup,
} from "react-leaflet";
import Legend from "./Legend.js";
import { LatLngTuple } from "leaflet";
import covid_data from "./data.json";

const HeatMap = () => {
  return (
    <div>
      <Map center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='<a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        <Legend />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Low Risk">
            <LayerGroup>
              {covid_data.features.map((f, i) => {
                const coord: LatLngTuple = [
                  f.geometry.coordinates[1],
                  f.geometry.coordinates[0],
                ];
                let s = Math.ceil(1 + Math.log2(f.properties.active));
                if (s > 8) return;
                let map_color = "#00FF00";
                  
                let r = Math.log2(1+ f.properties.active) * 20000;
                
                return (
                  <Circle
                    center={coord}
                    radius={r}
                    color={map_color}
                    key={f.properties.locName}
                    onMouseOver={(e) => {
                      e.target.openPopup();
                    }}
                    onMouseOut={(e) => {
                      e.target.closePopup();
                    }}
                  >
                    <Popup>
                      {f.properties.locName}
                      <br />
                      Active Cases: {f.properties.active}
                    </Popup>
                  </Circle>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Medium Risk">
            <LayerGroup>
            {covid_data.features.map((f, i) => {
                const coord: LatLngTuple = [
                  f.geometry.coordinates[1],
                  f.geometry.coordinates[0],
                ];
                let s = Math.ceil(1 + Math.log2(f.properties.active));
                if (s > 15 || s <= 8) return;
                let map_color = "#FFFF00";
                  
                let r = Math.log2(1+ f.properties.active) * 20000;
                
                return (
                  <Circle
                    center={coord}
                    radius={r}
                    color={map_color}
                    key={f.properties.locName}
                    onMouseOver={(e) => {
                      e.target.openPopup();
                    }}
                    onMouseOut={(e) => {
                      e.target.closePopup();
                    }}
                  >
                    <Popup>
                      {f.properties.locName}
                      <br />
                      Active Cases: {f.properties.active}
                    </Popup>
                  </Circle>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="High Risk">
            <LayerGroup>
            {covid_data.features.map((f, i) => {
                const coord: LatLngTuple = [
                  f.geometry.coordinates[1],
                  f.geometry.coordinates[0],
                ];
                let s = Math.ceil(1 + Math.log2(f.properties.active));
                if (s <= 15) return;
                let map_color = "#FF0000";
                let r = Math.log2(1+ f.properties.active) * 25000;
                
                return (
                  <Circle
                    center={coord}
                    radius={r}
                    color={map_color}
                    key={f.properties.locName}
                    onMouseOver={(e) => {
                      e.target.openPopup();
                    }}
                    onMouseOut={(e) => {
                      e.target.closePopup();
                    }}
                  >
                    <Popup>
                      {f.properties.locName}
                      <br />
                      Active Cases: {f.properties.active}
                    </Popup>
                  </Circle>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </Map>
    </div>
  );
};

export default HeatMap;
