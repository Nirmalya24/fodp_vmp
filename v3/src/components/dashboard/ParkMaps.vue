<template>
  <div>
    <h1 class="display-2 pa-3">Maps</h1>
    <div style="height: 500px; width: 100%; border: 1px solid black;">
      <l-map v-if="showMap" style="height: 100%"
        :zoom="zoom" :center="center" :options="mapOptions"
        @update:center="centerUpdate" @update:zoom="zoomUpdate"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
      </l-map>
    </div>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer} from "vue2-leaflet";

export default {
  name: "Maps",
  components: {
    LMap, LTileLayer
  },
  data() {
    return {
      zoom: 15,
      center: latLng(47.661257, -122.414946),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.661257, -122.414946),
      showMap: true,
      mapOptions: {
        zoomSnap: 0.5
      }
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
  margin: 0
}
</style>