<template>
  <v-container grid-list-md fluid class="hauteur">
    <v-layout row fill-height>
      <v-flex xs9>
        <v-layout column fill-height class='mt-1 mr-3'>
          <v-flex :class="isConnected ? 'xs3' : 'hide'">
            <PedroGraphs class="hauteur"></PedroGraphs>
          </v-flex>
          <v-flex :class="isConnected ? 'xs9' : 'xs12'">
            <PedroChatbox class="hauteur" @connected=toggleConnected>
            </PedroChatbox>
          </v-flex>
        </v-layout>
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
import PedroGraphs from '../components/Pedro/PedroGraphs.vue'
export default {
    data: () => {
        return {
          isConnected: false,
        }
    },
    methods: {
      toggleConnected() {
        this.isConnected = !this.isConnected
      }
    },
    components: {PedroPersona, PedroChatbox, PedroGraphs}
}
</script>

<style scoped>
.hauteur {
  height: 100%;
}
.mt-10 {
  margin-top: 50px;
}
.hide {
  display: none;
}
</style>
