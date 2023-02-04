<template>

  <div v-if="keycloak.auth">
    Welcome {{keycloak.name}}
  </div>
  <div v-else>
    Please log in
  </div>

  <ion-button  v-if="!keycloak.auth" @click="keycloak.login()">login</ion-button>
  <ion-button v-if="keycloak.auth" @click="keycloak.logout()">logout</ion-button>

</template>

<script lang="js">
import { defineComponent } from 'vue';
import Keycloak from "keycloak-js";
import Vue from 'vue';
import App from "@/App";


export default defineComponent({
  name: 'LoginView',
  components: {
  },
  setup() {
    let initOptions = {
      url: 'http://localhost:8080/', realm: 'myrealm', clientId: 'Nutzer'
    }
    let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (auth) {
    console.log("Authenticated");

    new Vue({
      el: '#app',
      render: h => h(App, { props: { keycloak: keycloak } })
    })
  }

//Token Refresh
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.log.info('Token refreshed' + refreshed);
      } else {
        console.log.warn('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      console.log.error('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  console.log.error("Authenticated Failed");
});
      return {keycloak};
    },
  });

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
