<template>
    <div class="form">
        <!-- Calculation Form -->

        <div class="results">
            
            <div v-for="(name, index) in founderDetails" :key="index">
                <p>{{ name.name }} gets {{ equitySplit[index] * 100 }}% Equity</p>
                <p></p>
            </div>
        </div>

        <!-- for each founder have the similar form -->
        <div class="row p-5">
            <div class="founder-form col text-start" v-for="(founder, count) in founderDetails" :key="count">
            
                <div id="fibf">
                    <p><u>{{ founder.name }}</u></p>
                    <!-- Founder Involvement Before Funding -->
                    <p>How much will this founder be engaged in this company before it raises funds?</p>
                    <label for="exc">Exclusive</label>
                    <input type="radio" :name="'fibf' + founder.name" id="exc" value="1" v-model="FoundersInformation.FounderInvolvementBeforeFunding[count]">
                    <label for="ft">Full-Time</label>
                    <input type="radio" :name="'fibf' + founder.name" id="ft" value="0.8" v-model="FoundersInformation.FounderInvolvementBeforeFunding[count]">
                    <label for="pt">Part-Time</label>
                    <input type="radio" :name="'fibf' + founder.name" id="pt" value="0.5" v-model="FoundersInformation.FounderInvolvementBeforeFunding[count]">
                </div>
                <br>
                <div id="fipd">
                   
                    <!-- Allocate how much each founder will be involved in product development.  -->
                    <p>How much will this founder will be involved in product development?</p>
                    <label for="slider">Involvement in Product Development</label>
                    <input type="range" min="0" max="100" step="10" v-model="FoundersInformation.FounderInvolvementInProductDevelopment[count]" :name="'fipd' + founder.name" :id="'sliderfipd' + founder.name">
                </div>
                <br>
                <div id="fism">
                    <!-- Allocate how much each founder will be involved in sales and marketing.   -->
                    <p>How much will this founder will be involved in sales and marketing?</p>
                    <label for="slider">Involvement in Sales and Marketing</label>
                    <input type="range" min="0" max="100" step="10" v-model="FoundersInformation.FounderInvolvementInSalesAndMarketing[count]" :name="'fism' + founder.name" :id="'sliderfism' + founder.name">
                </div>
                <br>

                <div id="fiio">
                    <!-- Allocate how much each founder will be involved in sales and marketing.   -->
                    <p>How much will this founder will be involved in Operations?</p>
                    <label for="slider">Involvement in Operations</label>
                    <input type="range" min="0" max="100" step="10" v-model="FoundersInformation.FounderInvolvementInOperations[count]" :name="'fiio' + founder.name" :id="'sliderfiio' + founder.name">
                </div>

                <br>

                <div id="fsbf">
                    <!-- Will this founder be taking a salary before the Company raises funds and, if so,
how much?   -->
                    <p>How much will this founder take as a salary (monthly) before funding?</p>
                    <label for="">Salary</label>
                    <input type="number" v-model="FoundersInformation.FounderSalaryBeforeFunding[count]" :name="'fsbf' + founder.name" :id="'fsbf' + founder.name">
                </div>

                <br>

                <div id="fyoe">
                    <!-- How many years of experience is this co-founder bringing to the table in her or his
primary field of responsibility? -->
                    <p>Years of experience they bring to the table in her/his
                        primary field of responsibility? </p>
                    <label for="">Years of Experience</label>
                    <input type="number" v-model="FoundersInformation.FounderYearsOfExperience[count]" :name="'fyoe' + founder.name" :id="'fyoe' + founder.name">
                </div>

                <br>
                
                <div id="frep">
                    <!-- How hard or easy is it replace or replicate this founder's contribution?  -->
                    <p>How hard or easy is it replace or replicate this founder's contribution? </p>
                    <label for="">Replicability of this Founder (0-Very Easy, 5-Very Hard)</label>
                    <input type="range" v-model="FoundersInformation.FounderReplicability[count]" step="1" min="0" max="5" :name="'frep' + founder.name" :id="'frep' + founder.name">
                </div>

                <br>

                <div id="fceo">
                    <!-- Who is the CEO?   -->
                    <p>Is Founder CEO? </p>
                    <label for="fceo">Yes</label>
                    <input type="radio" v-model="FoundersInformation.FounderIsCEO" name="fceo" :value="founder.name" :id="'fceo'">
                </div>

                <br>

                <div id="fidea">
                    <!-- Who is the CEO?   -->
                    <p>Is it this founders idea execution? </p>
                    <label for="fidea">Yes</label>
                    <input type="radio" v-model="FoundersInformation.FounderIsIdeaExecution" name="fidea" :value="founder.name" :id="'fidea'">
                </div>

                <br>
               
                <div id="ficc">
                    <!--  Will this founder be making an initial capital contribution and, if so, how much?   -->
                    <p>Founder Initial Capital Contribution </p>
                    <label for="">Initial Contribution</label>
                    <input type="number" v-model="FoundersInformation.FounderInitialCapitalContribution[count]" :name="'ficc' + founder.name" :id="'ficc' + founder.name">
                </div>
                <hr>
         
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StartupDetails',
        props: {
            founderDetails: {
                type: Array,
                required: true
            }
        },
        mounted(){
            for (let index = 0; index < this.founderDetails.length; index++) {
                this.FoundersInformation.FounderInvolvementBeforeFunding.push(0);
                this.FoundersInformation.FounderInvolvementInProductDevelopment.push(0);
                this.FoundersInformation.FounderInvolvementInSalesAndMarketing.push(0);
                this.FoundersInformation.FounderInvolvementInOperations.push(0);
                this.FoundersInformation.FounderSalaryBeforeFunding.push(0);
                this.FoundersInformation.FounderYearsOfExperience.push(0);
                this.FoundersInformation.FounderReplicability.push(0);
                this.FoundersInformation.FounderIsCEO.push(0);
                this.FoundersInformation.FounderIsIdeaExecution.push(0);
                this.FoundersInformation.FounderInitialCapitalContribution.push(1);
            }
        },
        data(){
            return{
                FoundersInformation:{
                    FounderInvolvementBeforeFunding: [],
                    FounderInvolvementInProductDevelopment: [],
                    FounderInvolvementInSalesAndMarketing: [],
                    FounderInvolvementInOperations: [],
                    FounderSalaryBeforeFunding: [],
                    FounderYearsOfExperience: [],
                    FounderReplicability: [],
                    FounderIsCEO: [],
                    FounderIsIdeaExecution: [],
                    FounderInitialCapitalContribution: []
                }
            }
        },
        computed:{
            equitySplit(){
                //for each founder, calculate the equity split, give/take points based on the answers
            let equitySplits = [];
            let totalInvestment = this.FoundersInformation.FounderInitialCapitalContribution.reduce((a, b) => parseInt(a) + parseInt(b), 0);
               for(let index = 0; index < this.founderDetails.length; index++){
                    let individualEquity = 0;

                    let founderInvolvement = parseFloat(this.FoundersInformation.FounderInvolvementBeforeFunding[index]);
                    let founderIPD = parseInt(this.FoundersInformation.FounderInvolvementInProductDevelopment[index]) / 100;
                    let founderISM = parseInt(this.FoundersInformation.FounderInvolvementInSalesAndMarketing[index]) / 100;
                    let founderIO = parseInt(this.FoundersInformation.FounderInvolvementInOperations[index]) / 100;
                    let founderSalary = this.FoundersInformation.FounderSalaryBeforeFunding[index];

                    if(founderSalary > 0){
                        if(founderSalary > 4000){
                            founderSalary = -4;
                        }
                        else{
                            let founderSalaryMult = founderSalary / 1000;
                            founderSalary = founderSalaryMult * (-0.5);
                        }
                    }
                    else{
                        founderSalary = 4;
                    }
                    
                    let founderYOE = this.FoundersInformation.FounderYearsOfExperience[index] / 10;

                    if(founderYOE > 1.0){
                        founderYOE = 1.0;
                    }
                    else if(founderYOE < 0.0){
                        founderYOE = 0.0;
                    }

                    let founderReplicability = parseInt(this.FoundersInformation.FounderReplicability[index]);

                    if(founderReplicability == 0){
                        founderReplicability = 0.0;
                    }
                    else{
                        founderReplicability /= 5;
                    }

                    let founderCEO = 0;
                    
                    if(this.FoundersInformation.FounderIsCEO.toString() === this.founderDetails[index].name.toString()){
                        console.log("founder is ceo");
                        founderCEO = 1;
                    }
                    else{
                        console.log("founder is not ceo");
                        founderCEO = 0;
                    }

                    let founderIE = 0;
                    
                    if(this.FoundersInformation.FounderIsIdeaExecution.toString() === this.founderDetails[index].name.toString()){
                        console.log("founder is idea execution");
                        founderIE = 1;
                    }
                    else{
                        console.log("founder is not idea execution");
                        founderIE = 0;
                    }

                    let founderICC = this.FoundersInformation.FounderInitialCapitalContribution[index] / totalInvestment;


                    //adding up the points
                    individualEquity += 
                    founderInvolvement + 
                    founderIPD +
                    founderISM +
                    founderIO +
                    founderSalary +
                    founderYOE +
                    founderReplicability + 
                    founderCEO + 
                    founderIE +
                    founderICC;

                    equitySplits.push(individualEquity);
               }

               //normalize the equity splits
                let totalEquity = equitySplits.reduce((a, b) => a + b, 0);
                for(let index = 0; index < equitySplits.length; index++){
                    equitySplits[index] = equitySplits[index] / totalEquity;
                }

               return equitySplits;
            },
     }
    }
</script>

<style scoped>

</style>