<template>
    <div class="form">
        <form @submit.prevent="submitForm">
            <div v-for="(founder, index) in founders" :key="index">
                <label :for="'founder' + index">Founder {{ index + 1 }} Name:</label>
                <input type="text" :id="'founder' + index" v-model="founder.name" :required="index < 2">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        emits: ['to-calculate'],
        name: 'FounderDetails',
        data() {
        return {
            founders: [
                { name: '' },
                { name: '' },
                { name: '' },
                { name: '' },
            ],
        };
    },
    methods: {
        submitForm() {
            this.$emit('to-calculate', this.founders.filter(founder => founder.name !== ''));
        },
    },
}
</script>

<style scoped>

</style>