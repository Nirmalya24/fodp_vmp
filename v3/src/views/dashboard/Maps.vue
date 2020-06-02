<template>
  <div>
    Mapsss
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 500px"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >

      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

    </l-map>
  </div>
</template>

<script>
import {latLng } from 'leaflet';
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  name: "Maps",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 14.5,
      center: latLng(47.6611316,-122.41343),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>

<style scoped>
l-map {
  height: 500px;
}
</style>
