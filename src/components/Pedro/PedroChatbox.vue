

<template>
  <v-card>
    <v-layout column fill-height justify-end>
      <v-flex xs11 px-4 class="paysage">
        <v-timeline>
          <v-timeline-item
              :key="message"
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
      </v-flex>
      <v-flex xs1>
        <v-container>
          <v-layout>
            <v-text-field
              v-model="message"
              label="Your message"
              required
              v-on:keyup.enter="onPost"
            ></v-text-field>
            <v-btn @click="all">All</v-btn>
            <v-btn @click="none">None</v-btn>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>

import { DirectLine } from 'botframework-directlinejs';

var secret = "lMy3tOEaOhM.nJa2Hu5KyEwsXiN2o9arp0GUrfPieAsWGzuSMKZUajk"


export default {
  data () {
    return {
      panel: [],
      items: 1,

      publicPath: process.env.BASE_URL,
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
    all () {
      this.panel = [...Array(this.items).keys()].map(() => true)
      console.debug('all', this.panel)
    },
    // Reset the panel
    none () {
      this.panel = []
      console.debug('none', this.panel)
    },

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
            console.debug("Activity posted", id)
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

<style scoped>
.red {
  background-color: red;
}

.hauteur {
  height: 100%;
}

.paysage::after {
  content: "";
  background-image: url("http://localhost:8080/PAYSAGE.png");
  background-position: 52% 50%;
  background-size: cover;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
}
</style>
