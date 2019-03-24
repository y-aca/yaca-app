<template>
  <v-app class='font'>
    <v-layout row fill-height class="toto">
      <v-flex xs1 pl-4 mr-1 ml-5>
        <v-layout justify-space-around column fill-height>
          <v-flex xs2 class="mt-5">
            <v-avatar
              :size="100"
              color="grey lighten-4"
            >
              <img :src="`${publicPath}logo.png`" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs2>
            <v-avatar
              :size="100"
              color="grey lighten-4"
            >
              <img :src="`${publicPath}JESSY.png`" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs2>
            <v-avatar
              :size="100"
              color="grey lighten-4"
            >
              <img :src="`${publicPath}MITSU.png`" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs2>
            <v-avatar
              :size="100"
              color="grey lighten-4"
            >
              <img :src="`${publicPath}PEDRO.png`" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs2>
            <v-avatar
              :size="100"
              color="grey lighten-4"
            >
              <img :src="`${publicPath}PACITO.png`" alt="avatar">
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs11>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
body .font {
  font-family:  'Montserrat';
  font-size: 1.3em;
}
.toto {
  background-color: #C3E6E5;
}
</style>
