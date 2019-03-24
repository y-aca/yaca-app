

<template>

  <v-card>
    <v-layout column justify-end class="chatboxheight">
      <v-flex xs11 px-4 class="paysage">
        <v-timeline>
          <v-timeline-item
              :key="message"
              v-for="message in messages"
          >

          <template v-slot:icon>
            <v-avatar>
              <img :src="`${publicPath}couleur.png`" alt="avatar">
            </v-avatar>
          </template>

            <template v-slot:opposite>
              <span>{{ message.author }}</span>
            </template>

            <template v-slot>
              <div>
                <v-container>
                  <v-layout column>
                    <v-flex
                      v-for="n in message.text"
                    >
                      <v-card v-if="message.type === 'text'" class="pa-3">
                        {{ n }}
                      </v-card>
                      <v-card v-if="message.type === 'slider'" class="pa-3">
                        <v-slider
                          :min="1"
                          :max="10"
                          v-model="ex3.val"
                          :label="ex3.label"
                          :thumb-color="ex3.color"
                          thumb-label="always"
                        ></v-slider>
                      </v-card>
                      <v-card v-if="message.type === 'rating'" class="pa-3">
                        <v-rating
                          v-model="rating"
                          background-color="#009999 lighten-3"
                          color="#009999"
                        ></v-rating>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </div>
            </template>
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
            <v-btn flat @click="submit"><v-icon class="px-15">fa-paper-plane</v-icon></v-btn>
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
      ex3: {
        val: 6,
        label: 'Ça va !',
        color: '#eb1015',
      },
      rating: 3,
      publicPath: process.env.BASE_URL,
      agent: null,
      message: null,
      messages: [],
      addMessage: function(author, text, value=null) {
        var type = 'text';
        var lastIndex = this.messages.length - 1;
        var lastMessage = this.messages[lastIndex];
        if(lastIndex >= 0 && lastMessage.author == author) {
            lastMessage.text.push(text);
        } else {
            this.messages.push({author: author, text: [text], type: type})
        }
      }
    }
  },

  methods: {
    onPost: function(args) {
      const value = args.target.value
      console.debug("onPost", value)
      this.addMessage("", value)
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
    },

    submit: function() {
      this.$emit('connected')
    }
  },
  beforeMount: function() {
    this.agent = new DirectLine({ secret: secret })
    this.agent.activity$
      .filter(activity => activity.type === 'message' && activity.from.id === 'yacabot')
      .subscribe(
          activity => {
            this.addMessage("YACABot", activity.text, activity.value)
          }
      )
    this.agent.postActivity({
      from: { id: 'myUserId', name: 'myUserName' }, // required (from.name is optional)
      type: 'message',
      text: "start",
    })
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

.chatboxheight {
  height: 1028px;
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

.px-15 {
  padding: 15px;
}
</style>
