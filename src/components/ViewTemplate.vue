<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col
          class="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
        >
          <v-card shaped outlined>
            <p class="display-2 font-weight-bold">{{ title }}</p>
            <v-list-item three-lines>
              <v-list-item-content>
                <div class="overline mb-4">{{ overline }}</div>
                <v-list-item-title class="headline mb-1">
                  {{ summary }}
                </v-list-item-title>
              </v-list-item-content>
              <!--              <v-list-item-avatar-->
              <!--                tile-->
              <!--                size="80"-->
              <!--                color="grey"-->
              <!--              ></v-list-item-avatar>-->
            </v-list-item>
            <v-card-text v-if="text">
              {{ text }}
            </v-card-text>
            <v-card-text v-else-if="html" v-html="html"> </v-card-text>
            <v-card-actions v-for="option in options" :key="option.id">
              <router-link :to="option.link">
                <v-btn outlined rounded text :color="option.color">{{
                  option.text
                }}</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$vuetify.theme.dark = vm.dark;
    });
  },
  name: "ViewTemplate",
  props: {
    dark: {
      required: false,
      default: false,
      type: Boolean,
    },
    title: String,
    overline: String,
    summary: String,
    text: {
      required: false,
      default: false,
    },
    html: {
      required: false,
      default: false,
    },
    options: Array,
  },
};
</script>

<style scoped></style>
