<template>
    <nav class="navbar bg-body-tertiary m-auto">
        <div class="container">
          <span class="navbar-brand mb-0 h1">Expanded Results</span>
        </div>
      </nav>
    
      <div class="container">
        {{ equitySplit  }}
      </div>

    
</template>

<script>
    import { useStore } from "@/stores/piniaStore";
    export default {
        name: 'FinalResults',
        setup() {
          const store = useStore(); 
          return { store };
        },
        data() {
            return {
                FoundersInformation: this.store.founderInformation,
                founderDetail: this.store.founderDetails,
                equitySplit: this.store.equitySplit,
            }
        }
}
</script>

<style scoped>

</style>