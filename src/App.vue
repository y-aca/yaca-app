<template>
  <v-app>
    <v-layout row fill-height>
      <v-flex xs1 pl-4 mr-1>
        <v-layout justify-space-around column fill-height>
          <v-flex xs2>
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
</style>
