<script setup>
import FounderDetails from './components/FounderDetails.vue'
import StartupDetails from './components/StartupDetails.vue'
import FinalResults from './components/FinalResults.vue'
</script>

<template>
  <component :is="activeCompoment" @to-calculate="toCalculate" :founderDetails="founderDetails"/>
</template>

<script>

export default {
  name: 'App',
  components: {
    FounderDetails,
    StartupDetails,
    FinalResults
  },
  data() {
    return {
      activeCompoment: FounderDetails,
      founderDetails: []
    }
  },
  methods: {
    toCalculate(founders) {
      this.activeCompoment = StartupDetails;
      founders.forEach(founder => {
        this.founderDetails.push(founder);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
