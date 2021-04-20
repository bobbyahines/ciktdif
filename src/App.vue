<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Site Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/siteLogo.png')"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1"
          contain
          min-width="100"
          :src="require('../src/assets/siteName.png')"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark>
      <v-container>
        <v-row class="text-center">
          <v-col>
            <router-link to="/">
              <v-btn
                class="font-weight-bold mb-3"
                elevation="2"
                small
                outlined
                rounded
                dark
                >Home</v-btn
              >
            </router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/about">
              <v-btn
                class="font-weight-bold mb-3"
                elevation="2"
                small
                outlined
                rounded
                dark
                >About</v-btn
              >
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
