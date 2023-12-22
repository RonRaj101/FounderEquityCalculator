<template>
    <nav class="navbar bg-body-tertiary m-auto">
        <div class="container">
          <span class="navbar-brand mb-0 h1">Expanded Results</span>
        </div>
      </nav>
    
      <div class="container">
        {{ emailMessage  }}
      </div>

    
</template>

<script>
    export default {
        name: 'FinalResults',
        props: {
            founderDetails: {
                type: Array,
                required: true,
            },
            founderInformation: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                FoundersInformation: this.founderInformation,
                founderDetail: this.founderDetails,
                equitySplit: [],
            }
        },
        computed:{
            emailMessage(){
      //detailed report for all founders, compiled into an email message

      let message = `Equity Split Report: <br><hr>`;
      for (let i = 0; i < this.founderDetail.length; i++) {
       
        message += `<b>${this.founderDetail[i].name}</b>: <b>${this.equitySplit[i] * 100}%</b><br>`;

        if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 0)
          message += `Founder Involvement Before Funding: None<br>`;
        else if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 0.5)
          message += `Founder Involvement Before Funding: Part-Time<br>`;
        else if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 0.8)
          message += `Founder Involvement Before Funding: Full-Time<br>`;
        else if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 1)
          message += `Founder Involvement Before Funding: Exclusive<br>`;
        else
          message += `Founder Involvement Before Funding: ${ this.FoundersInformation.FounderInvolvementBeforeFunding[i] }<br>`;

        message += `Founder Involvement In Product Development: ${this.FoundersInformation.FounderInvolvementInProductDevelopment[i] * 100}% <br>`;
        message += `Founder Involvement In Sales And Marketing: ${this.FoundersInformation.FounderInvolvementInSalesAndMarketing[i] * 100}% <br>`;
        message += `Founder Involvement In Operations: ${this.FoundersInformation.FounderInvolvementInOperations[i] * 100}% <br>`;
        message += `Founder Salary Before Funding: $${this.FoundersInformation.FounderSalaryBeforeFunding[i]} per month<br>`;
        message += `Founder Years Of Experience: ${this.FoundersInformation.FounderYearsOfExperience[i]}<br>`;
        if(this.FoundersInformation.FounderReplicability[i] == 1){
          message += `Founder Replicability: Very Easy<br>`;
        } else if(this.FoundersInformation.FounderReplicability[i] == 2){
          message += `Founder Replicability: Easy<br>`;
        } else if(this.FoundersInformation.FounderReplicability[i] == 3){
          message += `Founder Replicability: Fair<br>`;
        } else if(this.FoundersInformation.FounderReplicability[i] == 4){
          message += `Founder Replicability: Hard<br>`;
        } else if(this.FoundersInformation.FounderReplicability[i] == 5){
          message += `Founder Replicability: Very Hard<br>`;
        } else {
          message += `Founder Replicability: ${this.FoundersInformation.FounderReplicability[i]}<br>`;
        }

        if(this.FoundersInformation.FounderIsCEO[i])
          message += `Founder Is CEO: Yes<br>`
        else
          message += `Founder Is CEO: No<br>`

        if(this.FoundersInformation.FounderIsIdeaExecution[i])
          message += `Founder's Idea for Execution: Yes<br>`
        else
          message += `Founder's Idea for Execution: No<br>`
        message += `Founder Initial Capital Contribution: $${this.FoundersInformation.FounderInitialCapitalContribution[i]}<br><br>`;

        message += `----------------------------------------<br><br>`;
      }
      return message;
    },
        }
}
</script>

<style scoped>

</style>