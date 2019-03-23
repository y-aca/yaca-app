<template>
  <v-container grid-list-md fluid>
    <v-layout column fill-height>
      <v-flex xs8>
        <v-layout row class="firstrow" px2>
          <v-flex xs6 mr2>
            <PedroPersona class="hauteur">
            </PedroPersona>
          </v-flex>
          <v-flex xs6>
            <PedroChatbox class="hauteur">
            </PedroChatbox>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4>
          <v-card class="hauteur">
            XXXSSS
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PedroPersona from '../components/Pedro/PedroPersona.vue'
import PedroChatbox from '../components/Pedro/PedroChatbox.vue'

export default {
    data: () => {
        return {}
    },
    components: {PedroPersona, PedroChatbox}
}
</script>

<style scoped>
.hauteur {
  height: 100%;
}
</style>
