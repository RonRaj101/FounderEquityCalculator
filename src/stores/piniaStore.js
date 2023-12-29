import { defineStore } from 'pinia';

// global store
// founder names, information, equity split
//methods: add, remove, reinit, 

export const useStore = defineStore('main',{
    state: () => ({
        founderDetails:[{ name: "" }, { name: "" }],
        founderInformation:{
            FounderInvolvementBeforeFunding: [],
            FounderInvolvementInProductDevelopment: [],
            FounderInvolvementInSalesAndMarketing: [],
            FounderInvolvementInOperations: [],
            FounderSalaryBeforeFunding: [],
            FounderYearsOfExperience: [],
            FounderReplicability: [],
            FounderIsCEO: [],
            FounderIsIdeaExecution: [],
            FounderInitialCapitalContribution: [],
        }
    }),
    actions: {
        initFounders(){
            for (let index = 0; index < this.founderDetails.length; index++) {
                this.founderInformation.FounderInvolvementBeforeFunding.push(0);
                this.founderInformation.FounderInvolvementInProductDevelopment.push(0);
                this.founderInformation.FounderInvolvementInSalesAndMarketing.push(0);
                this.founderInformation.FounderInvolvementInOperations.push(0);
                this.founderInformation.FounderSalaryBeforeFunding.push(0);
                this.founderInformation.FounderYearsOfExperience.push(0);
                this.founderInformation.FounderReplicability.push(1);
                this.founderInformation.FounderIsCEO.push(0);
                this.founderInformation.FounderIsIdeaExecution.push(0);
                this.founderInformation.FounderInitialCapitalContribution.push(1);
              }
        },
        addFounder(){
            this.founderDetails.push({ name: "" });
        },
        removeFounder(index){
            this.founderDetails.splice(index, 1);
            //shift all information to new index
            for (let i = index; i < this.founderDetails.length; i++) {
              this.founderInformation.FounderInvolvementBeforeFunding[i] = this.founderInformation.FounderInvolvementBeforeFunding[i+1];
              this.founderInformation.FounderInvolvementInProductDevelopment[i] = this.founderInformation.FounderInvolvementInProductDevelopment[i+1];
              this.founderInformation.FounderInvolvementInSalesAndMarketing[i] = this.founderInformation.FounderInvolvementInSalesAndMarketing[i+1];
              this.founderInformation.FounderInvolvementInOperations[i] = this.founderInformation.FounderInvolvementInOperations[i+1];
              this.founderInformation.FounderSalaryBeforeFunding[i] = this.founderInformation.FounderSalaryBeforeFunding[i+1];
              this.founderInformation.FounderYearsOfExperience[i] = this.founderInformation.FounderYearsOfExperience[i+1];
              this.founderInformation.FounderReplicability[i] = this.founderInformation.FounderReplicability[i+1];
              this.founderInformation.FounderIsCEO[i] = this.founderInformation.FounderIsCEO[i+1];
              this.founderInformation.FounderIsIdeaExecution[i] = this.founderInformation.FounderIsIdeaExecution[i+1];
              this.founderInformation.FounderInitialCapitalContribution[i] = this.founderInformation.FounderInitialCapitalContribution[i+1];
            }
          },
          reInitFounder(index){
            this.founderInformation.FounderInvolvementBeforeFunding[index] = 0;
            this.founderInformation.FounderInvolvementInProductDevelopment[index] = 0;
            this.founderInformation.FounderInvolvementInSalesAndMarketing[index] = 0;
            this.founderInformation.FounderInvolvementInOperations[index] = 0;
            this.founderInformation.FounderSalaryBeforeFunding[index] = 0;
            this.founderInformation.FounderYearsOfExperience[index] = 0;
            this.founderInformation.FounderReplicability[index] = 1;
            this.founderInformation.FounderIsCEO[index] = 0;
            this.founderInformation.FounderIsIdeaExecution[index] = 0;
            this.founderInformation.FounderInitialCapitalContribution[index] = 1;
          },
    },  
    getters:{
      equitySplit() {
        //for each founder, calculate the equity split, give/take points based on the answers
        let equitySplits = [];
        //calculate total investment, for calculating the initial capital contribution percentage
        let totalInvestment =
          this.founderInformation.FounderInitialCapitalContribution.reduce(
            (a, b) => parseInt(a) + parseInt(b),
            0
          );
        for (let index = 0; index < this.founderDetails.length; index++) {
          let individualEquity = 0;
  
          let founderInvolvement = parseFloat(
            this.founderInformation.FounderInvolvementBeforeFunding[index]
          );
          let founderIPD =
            parseInt(
              this.founderInformation.FounderInvolvementInProductDevelopment[
                index
              ]
            ) / 100;
          let founderISM =
            parseInt(
              this.founderInformation.FounderInvolvementInSalesAndMarketing[
                index
              ]
            ) / 100;
          let founderIO =
            parseInt(
              this.founderInformation.FounderInvolvementInOperations[index]
            ) / 100;
          let founderSalary =
            this.founderInformation.FounderSalaryBeforeFunding[index];
  
          if (founderSalary > 0) {
            if (founderSalary > 4000) {
              founderSalary = -4;
            } else {
              let founderSalaryMult = founderSalary / 1000;
              founderSalary = founderSalaryMult * -0.5;
            }
          } else {
            founderSalary = 4;
          }
  
          let founderYOE =
            this.founderInformation.FounderYearsOfExperience[index] / 10;
  
          if (founderYOE > 1.0) {
            founderYOE = 1.0;
          } else if (founderYOE < 0.0) {
            founderYOE = 0.0;
          }
  
          let founderReplicability = parseInt(
            this.founderInformation.FounderReplicability[index]
          );
  
          if (founderReplicability == 0) {
            founderReplicability = 0.0;
          } else {
            founderReplicability /= 5;
          }
  
          let founderCEO = 0;
  
          if (this.founderInformation.FounderIsCEO[index]) {
            founderCEO = 1;
          } else {
            founderCEO = 0;
          }
  
          let founderIE = 0;
  
          if (this.founderInformation.FounderIsIdeaExecution[index]) {
            founderIE = 1;
          } else {
            founderIE = 0;
          }
  
          let founderICC =
            this.founderInformation.FounderInitialCapitalContribution[index] /
            totalInvestment;
  
          // adding up the points, multiplying by the weightage //--prev:(EXCLUDED : founderCEO, founderIE, founderSalary)
          individualEquity +=
            founderInvolvement * 5 +
            founderIPD * 3 +
            founderISM * 3 +
            founderIO * 3 +
            founderYOE * 4 +
            founderReplicability * 5 +
            founderICC * 4 +
            founderCEO * 2 +
            founderIE * 1 +
            founderSalary * 4;
  
          equitySplits.push(individualEquity);
        }
  
        //normalize the equity splits
        let totalEquity = equitySplits.reduce((a, b) => a + b, 0);
        for (let index = 0; index < equitySplits.length; index++) {
          equitySplits[index] = equitySplits[index] / totalEquity;
        }
        return equitySplits;
      }
    }
});