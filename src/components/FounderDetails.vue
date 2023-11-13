<template>
  <nav class="navbar bg-body-tertiary m-auto">
    <div class="container">
      <span class="navbar-brand mb-0 h1">Add Founder Names</span>
    </div>
  </nav>
  <div class="form w-100">
  
    <form @submit.prevent="submitForm" class="w-75 m-auto p-5" >

      <div class="form-floating"  v-for="(founder, index) in founders"
      :key="index">
        <input
        type="text"
        class="form-control rounded-top-1"
        :id="'founder' + index"
        v-model="founder.name"
        :required="index < 2"
        placeholder="Founder Name"
      />
      <label :for="'founder' + index">Founder {{ index + 1 }}</label>
      </div>
      <p class="text-start my-2 m-1"><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25" @click="addFounder">Add Founder <i class="bi bi-plus"></i></a></p>
      <button class="btn btn-outline-dark btn-block col-12" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["to-calculate"],
  name: "FounderDetails",
  data() {
    return {
      founders: [{ name: "" }, { name: "" }],
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "to-calculate",
        this.founders.filter((founder) => founder.name !== "")
      );
    },
    addFounder(){
      this.founders.push({name:""});
    }
  },
};
</script>

<style scoped></style>
