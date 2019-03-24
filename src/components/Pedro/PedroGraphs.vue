<template>
    <v-card class="hauteur pd-3">
        <v-layout row fill-height>
        <v-flex xs7>
            <h2 class="text-md-center mt-1">Ta progression</h2>
            <v-sparkline class="hauteur"
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            auto-draw
            ></v-sparkline>
        </v-flex>
        <v-flex xs5>
            <v-layout column fill-height align-center justify-center>
            <v-flex xs12>
                <h2 class="text-md-center mr-5 mt-1">Ton objectif</h2>
                <v-progress-circular
                class="mt-10 ml-5"
                :value="80"
                :size="100"
                :width="15"
                color="orange"
                ></v-progress-circular>
            </v-flex>
            </v-layout>
        </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
const gradients = [
      ['#222'],
      ['#42b3f4'],
      ['red', 'orange', 'yellow'],
      ['purple', 'violet'],
      ['#00c6ff', '#F0F', '#FF0'],
      ['#f72047', '#ffd200', '#1feaea']
    ]
export default {
    data: () => {
        return {
          width: 2,
          radius: 10,
          padding: 8,
          lineCap: 'round',
          gradient: gradients[5],
          value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
          gradientDirection: 'bottom',
          gradients
        }
    },
    components: {}
}
</script>

<style scoped>
.hauteur {
  height: 100%;
}
.mt-10 {
  margin-top: 50px;
}
.pd-3 {
    z-index: 10;
    padding-bottom: 15px;
    background-color: #EEEEEE;
}
</style>
