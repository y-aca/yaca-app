<template>
  <v-app>
    <v-toolbar>
        <v-spacer></v-spacer>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img :src="`${publicPath}JESSY.png`" alt="avatar">
          </v-avatar>
        <v-spacer></v-spacer>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img :src="`${publicPath}MITSU.png`" alt="avatar">
          </v-avatar>
        <v-spacer></v-spacer>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img :src="`${publicPath}PEDRO.png`" alt="avatar">
          </v-avatar>
        <v-spacer></v-spacer>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img :src="`${publicPath}PACITO.png`" alt="avatar">
          </v-avatar>
        <v-spacer></v-spacer>
    </v-toolbar>
    <router-view></router-view>
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

