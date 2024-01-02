import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat } from 'ol/proj.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { Style, Icon } from 'ol/style.js';
import PinchZoom from 'ol/interaction/PinchZoom.js';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom.js';
import DragPan from 'ol/interaction/DragPan.js';
import { defaults as defaultInteractions } from 'ol/interaction.js';
import { defaults as defaultControls } from 'ol/control.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ngOnInit() {
    const coordinates = [20.142538422841458, 50.04084997839074];

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(new Point(fromLonLat(coordinates)))],
          }),
          style: new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: '../../assets/images/pin.png',
              scale: 0.08,
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 12,
      }),
      interactions: defaultInteractions().extend([
        new PinchZoom(),
        new MouseWheelZoom(),
        new DragPan(),
      ]),
      controls: defaultControls({ attribution: false, zoom: false }),
    });
  }
}
