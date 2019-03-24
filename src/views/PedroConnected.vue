<template>
  <v-container grid-list-md fluid class="hauteur">
    <v-layout row fill-height>
      <v-flex xs9>
        <v-layout>
          <PedroChatbox class="hauteur">
          </PedroChatbox>
        <v-layout>
      </v-flex>
      <v-flex xs3>
        <PedroPersona class="hauteur">
        </PedroPersona>
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
