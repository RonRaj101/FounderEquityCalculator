
<template>
  
  <nav class="navbar bg-body-tertiary m-auto">
    <div class="container">
      <span class="navbar-brand mb-0 h1">Add Founder Names</span>
    </div>
  </nav>
  <div class="form w-100">
    <form @submit.prevent="submitForm" class="w-75 m-auto p-5">
      <div
        class="form-floating"
        v-for="(founder, index) in store.founderDetails"
        :key="index"
      >
        <input
          type="text"
          class="form-control rounded-bottom-0 mb-2"
          :id="'founder' + index"
          v-model="founder.name"
          :required="index < 2"
          placeholder="Founder Name"
        />
        <label :for="'founder' + index">Founder {{ index + 1 }}</label>
      </div>
      <p class="text-start my-2 m-1">
        <a
          href="#"
          class="link-body-emphasis link-offset-2 link-underline-opacity-25"
          @click="store.addFounder"
          v-show="store.founderDetails.length < 4"
          >Add Founder <i class="bi bi-plus"></i
        ></a>
      </p>
      <button class="btn btn-outline-dark btn-block col-12" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { useStore } from "@/stores/piniaStore";
export default {
  emits: ["to-calculate"],
  name: "FounderDetails",
  setup() {
    const store = useStore(); 
    return { store };
  },
  mounted() {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "to-calculate",
        this.store.founderDetails.filter((founder) => founder.name !== "")
      );
    },
  },
  
};
</script>

<style scoped>
</style>
