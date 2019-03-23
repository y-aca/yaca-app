import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'


//Chat import
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Chat, ChatInstaller } from '@progress/kendo-chat-vue-wrapper'

import App from './App.vue'

Vue.use(ChatInstaller)
//End chat import



Vue.config.productionTip = false

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
import HelloWorld from './components/HelloWorld'
import YACAChatbox from './components/YACAChatbox.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/helloworld', component: HelloWorld},
  { path: '/YACAChatbox', component: YACAChatbox}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
