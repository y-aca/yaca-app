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

    <br /><br /><br />


    <div id="vueapp" class="vue-app">
        <kendo-chat ref="chat"
                    v-on:post="post"
                    v-on:sendmessage="sendMessage"
                    v-on:actionclick="actionClick"
                    v-on:typingstart="typingstart"
                    v-on:typingend="typingend"></kendo-chat>
    </div>

  </v-app>
</template>

<script>

import { DirectLine } from 'botframework-directlinejs';

var secretKey = "lMy3tOEaOhM.nJa2Hu5KyEwsXiN2o9arp0GUrfPieAsWGzuSMKZUajk"
var directLine = new DirectLine({
    secret: secretKey
});


export default {
  data () {
    return {
      //
      post: onPost,
      sendMessage: onSendMessage,
      actionClick: onActionClick,
      typingstart: onTypingStart,
      typingend: onTypingEnd
    }
  }
}
function onPost(ev) {
    console.log("A message has been posted to the Chat widget!");
}
function onSendMessage(ev) {
    console.log("onSendMessage!");
}
function onActionClick(ev) {
    console.log("onACtionClick!");
}
function onTypingStart(ev) {
    console.log("onTypingStart!");
}
function onTypingEnd(ev) {
    console.log("onTypingEnd!");
}
/*
var chat = $("#chat").kendoChat({
  post: function (args) {
    agent.postMessage(args);
  }
}).data("kendoChat");
*/
 /*
  window.DirectLineAgent = kendo.Class.extend({
    init: function (chat, secret) {
      this.chat = chat;
      this.iconUrl = "https://demos.telerik.com/kendo-ui/content/chat/avatar.png";

      // Assign here the Bot framework agent
      // The below example uses the Microsoft's Bot Framework
      this.agent = new DirectLine.DirectLine({ secret: secret });

      // The below code would depend on the Bot framework of choice
      // In this case, the agent is subscribed to listen for any activity of the service
      // Its onResponse method would be executed on any activity detected
      this.agent.activity$.subscribe($.proxy(this.onResponse, this));
    },
    // The implementation of the below methods would depend on the Bot framework of choice
    // This example uses the Microsoft's Bot Framework API to demonstrate a possible implementation
    postMessage: function (args) {
      this.agent.postActivity(args)
        .subscribe();
    },
    onResponse: function (response) {
      if (response.from.id === this.chat.getUser().id) {
        return;
      }

      response.from.iconUrl = this.iconUrl;

      this.renderMessage(response);
      this.renderAttachments(response);
      this.renderSuggestedActions(response.suggestedActions);
    },
    renderMessage: function (message) {
      if (message.text || message.type == "typing") {
        this.chat.renderMessage(message, message.from);
      }
    },
    renderAttachments: function (data) {
      this.chat.renderAttachments(data, data.from);
    },
    renderSuggestedActions: function (suggestedActions) {
      var actions = [];

      if (suggestedActions && suggestedActions.actions) {
        actions = suggestedActions.actions;
      }

      this.chat.renderSuggestedActions(actions);
    }
  });
  */
</script>
