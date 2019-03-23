<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>YUCA</span>
        <span class="font-weight-light">30 ans ?</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="A propos de YUCA"
      >
      </v-btn>
    </v-toolbar>

    <v-container grid-list-md text-xs-center>
        <div id="vueapp" class="vue-app">
        <template>
          <v-timeline>
            <v-timeline-item
              v-for="message in messages"
              large
            >
              <template v-slot:icon>
              </template>
              <template v-slot:opposite>
                <span>{{ message.author }}</span>
              </template>
              <v-card class="elevation-2">
                <v-card-text>{{ message.text }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </template>
        <!--
          <li v-for="message in messages">
            <div>
              <div class="message-bubble">
                <div class="username">{{ message.author }} : </div>
                <div class="content">{{ message.text }}</div>
              </div>
            </div>
          </li>
        </ul>
          <input type="text" v-model="message" v-on:keyup.enter="onPost">
        -->
        <template>
          <v-container>
            <v-layout>
              <v-text-field
                v-model="message"
                label="Your message"
                required
                v-on:keyup.enter="onPost"
              ></v-text-field>
          </v-layout>
        </v-container>
      </template>
      </div>
    </v-container>
  </v-app>
</template>

<script>

import { DirectLine } from 'botframework-directlinejs';

var secret = "lMy3tOEaOhM.nJa2Hu5KyEwsXiN2o9arp0GUrfPieAsWGzuSMKZUajk"


export default {
  data () {
    return {
      agent: null,
      message: null,
      messages: [],
      addMessage: function(author, text) {
        var lastIndex = this.messages.length - 1;
        var lastMessage = this.messages[lastIndex];
        if(lastIndex >= 0 && lastMessage.author == author) {
            lastMessage.text += " " + text;
        } else {
            this.messages.push({author: author, text: text})
        }
      }
    }
  },

  methods: {
    onPost: function(args) {
      const value = args.target.value
      console.debug("onPost", value)
      this.addMessage("User", value)
      this.agent.postActivity({
        from: { id: 'myUserId', name: 'myUserName' }, // required (from.name is optional)
        type: 'message',
        text: value,
      }).subscribe(
          id => {
            args.target.value = null
          },
          error => console.log("Error posting activity", error)
      );
    }
  },
  beforeMount: function() {
    this.agent = new DirectLine({ secret: secret })
    this.agent.activity$
      .filter(activity => activity.type === 'message' && activity.from.id === 'yacabot')
      .subscribe(
          activity => {
            this.addMessage("YACABot", activity.text)
          }
      )
  },
}

</script>
