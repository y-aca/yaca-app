<template>
  <v-app>
    <v-toolbar>
        <v-spacer></v-spacer>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
          <v-avatar
            :size="50"
            color="grey lighten-4"
          >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
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
      //
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

