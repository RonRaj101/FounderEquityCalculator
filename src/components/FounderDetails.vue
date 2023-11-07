<template>
  <div class="form w-100 " >
    <h1>Add Founder Names</h1>
    <form @submit.prevent="submitForm" class="w-50 m-auto p-5 border border-secondary-subtle" >
      <div
        class="input-group mb-3"
        v-for="(founder, index) in founders"
        :key="index"
      >
        <span class="input-group-text" :for="'founder' + index"
          >Founder {{ index + 1 }}</span
        >
        <input
          type="text"
          class="form-control"
          :id="'founder' + index"
          v-model="founder.name"
          :required="index < 2"
        />
      </div>
      <button class="btn btn-secondary btn-block col-12" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["to-calculate"],
  name: "FounderDetails",
  data() {
    return {
      founders: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "to-calculate",
        this.founders.filter((founder) => founder.name !== "")
      );
    },
  },
};
</script>

<style scoped></style>
