<template>
  <v-container fluid>
    <v-layout row class="firstrow" px2>
      <v-flex xs6 mr2>
        <PedroPersona>
        </PedroPersona>
      </v-flex>
      <v-flex xs6>
        <PedroChatbox>
        </PedroChatbox>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-container fluid>
          <v-card>
            XXX
          </v-card>
        </v-container>
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
.firstrow {
  height: 600px;
}
</style>
