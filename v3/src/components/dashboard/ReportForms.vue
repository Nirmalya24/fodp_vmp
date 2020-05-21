<template>
  <div>
    <h1 class="display-2 pa-3">Report Forms</h1>
    <v-card
      class="ma-4"
      flat
    >
      <v-item-group>
        <v-container>
          <v-row class="justify-space-around">
            <v-col
              v-for="option in options"
              :key="option"
              cols="10"
              md="5"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? '#4caf50' : ''"
                  class="d-flex align-center"
                  dark
                  height="60"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      class="display-1 flex-grow-1 text-center"
                    >
                    {{ option }}
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data: () => ({
    options: ['Make New Request', 'Your Requests'],
    // Add example reports ('Use this report if...') and images (ex. different kinds of signs or invasive species)
    forms: [
      'Wildlife Sighting', 'Trail Report', 'Homeless Camp',
      'Signs', 'Offleash Pets', 'Litter', 'Grafitti',
      'Vegetation Concerns', 'Other Inquiry'
    ],
    selected: ''
  })
}
</script>