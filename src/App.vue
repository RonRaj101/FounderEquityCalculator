<script setup>
import FounderDetails from "./components/FounderDetails.vue";
import StartupDetails from "./components/StartupDetails.vue";
import FinalResults from "./components/FinalResults.vue";

import { useStore } from "@/stores/piniaStore";
const store = useStore();
store;
</script>

<template>
  <component
    :is="activeCompoment"
    @to-calculate="toCalculate"
    @to-final-results="toFinalResults"
    :founderDetails="founderDetails"
    :founderInformation="founderInformation"
  />
</template>

<script>
export default {
  name: "App",
  components: {
    FounderDetails,
    StartupDetails,
    FinalResults,
  },
  data() {
    return {
      activeCompoment: FounderDetails,
      founderDetails: [],
    };
  },
  methods: {
    toCalculate(founders) {
      this.activeCompoment = StartupDetails;
      founders.forEach((founder) => {
        this.founderDetails.push(founder);
      });
    },
    toFinalResults(founderInformation) {
      this.activeCompoment = FinalResults;
      this.founderInformation = founderInformation;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
#app {
  font: 1em "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
