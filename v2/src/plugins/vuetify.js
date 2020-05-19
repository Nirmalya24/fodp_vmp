import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4caf50", // alternative primary: "#388e3c"
        secondary: "#f0f4f7",
        accent: "#03a9f4",
        error: "#f44336",
        warning: "#ff5722",
        info: "#00bcd4",
        success: "#607d8b"
      }
    }
  }
});
