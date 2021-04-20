<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-0" cols="12">
          <h1 class="display-2 font-weight-bold mb-3">
            Can I Keep this Disc I Found?
          </h1>

          <p class="subheading font-weight-regular">
            Wowzers! Did you just find a disc?! <br />
            What should you do?
          </p>
        </v-col>

        <v-col class="mb-0" cols="12">
          <v-img
            :src="require('../assets/siteLogo.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-0" cols="12">
          <router-link to="/start">
            <v-btn
              class="headline font-weight-bold mb-3"
              elevation="2"
              large
              outlined
              rounded
            >
              Start
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
