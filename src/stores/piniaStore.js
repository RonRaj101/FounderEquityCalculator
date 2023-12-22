import { defineStore } from 'pinia';

// global store
// founder names, information, equity split
//methods: add, remove, reinit, 

export const useStore = defineStore('main',{
    state: () => ({
        founderDetails:[],
        founderInformation:{}
    }),
    actions: {
        
    },  
});