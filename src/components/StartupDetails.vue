<template>

  <nav class="navbar bg-body-tertiary m-auto">
    <div class="container">
      <p class="navbar-brand mb-0 h1 text-start">Founder Equity Details</p>
    </div>
  </nav>

  <div class="details w-100 m-auto row">
    
    <div class="form p-0 m-0 col-lg-8 col-md-12">
      <!-- Calculation Form -->
    
      <!-- for each founder have the similar form -->
      <div class="row pt-5 px-0" style="place-content: ">
        <div
          class="tables table-responsive-xxl founder-form col-auto text-start"
          style=""
        >
          <table class="table table-borderless table-striped">
            <thead class="table-active">
              <tr>
                <th scope="col"></th>
                <th
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                  scope="col"
                >
                  {{ founder.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <th scope="row">
                  Founder engagment before this company before raising funds?
                </th>
                <td
                  class=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                  colspan=""
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      :name="'fibf' + founder.name"
                      id="flexRadioDefault1"
                      value="1"
                      v-model="
                        FoundersInformation.FounderInvolvementBeforeFunding[
                          count
                        ]
                      "
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Exclusive
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      :name="'fibf' + founder.name"
                      id="flexRadioDefault2"
                      value="0.8"
                      v-model="
                        FoundersInformation.FounderInvolvementBeforeFunding[
                          count
                        ]
                      "
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Full-Time
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      :name="'fibf' + founder.name"
                      id="flexRadioDefault3"
                      value="0.5"
                      v-model="
                        FoundersInformation.FounderInvolvementBeforeFunding[
                          count
                        ]
                      "
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Part-Time
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Founder involvement in product development?</th>
                <td v-for="(founder, count) in founderDetails" :key="count">
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      FoundersInformation
                        .FounderInvolvementInProductDevelopment[count]
                    "
                    :name="'fipd' + founder.name"
                    :id="'sliderfipd' + founder.name"
                  />
                  ({{FoundersInformation.FounderInvolvementInProductDevelopment[count]}}%)
                </td>
              </tr>
              <tr>
                <th scope="row">Founder involvement in Sales and Marketing?</th>
                <td
                  colspan=""
                  class=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      FoundersInformation.FounderInvolvementInSalesAndMarketing[
                        count
                      ]
                    "
                    :name="'fism' + founder.name"
                    :id="'sliderfism' + founder.name"
                  />

                  ({{FoundersInformation.FounderInvolvementInSalesAndMarketing[count]}}%)
                </td>
              </tr>

              <tr>
                <th scope="row">Founder involvement in Operations?</th>
                <td
                  colspan=""
                  class=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      FoundersInformation.FounderInvolvementInOperations[count]
                    "
                    :name="'fiio' + founder.name"
                    :id="'sliderfiio' + founder.name"
                  />
                  ({{FoundersInformation.FounderInvolvementInOperations[count]}}%)
                </td>

               
              </tr>

              <tr>
                <th scope="row">Founder salary ($monthly) before funding?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <input
                    class="form-control"
                    type="number"
                    v-model="
                      FoundersInformation.FounderSalaryBeforeFunding[count]
                    "
                    :name="'fsbf' + founder.name"
                    :id="'fsbf' + founder.name"
                  />
                </td>

                
              </tr>

              <tr>
                <th scope="row">
                  Years of experience in her/his primary field?
                </th>
                <td
                  colspan=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <input
                    class="form-control"
                    type="number"
                    v-model="
                      FoundersInformation.FounderYearsOfExperience[count]
                    "
                    :name="'fyoe' + founder.name"
                    :id="'fyoe' + founder.name"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">Founder Contribution Replicability?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <input
                    type="range"
                    class="form-range"
                    v-model="FoundersInformation.FounderReplicability[count]"
                    step="1"
                    min="1"
                    max="5"
                    :name="'frep' + founder.name"
                    :id="'frep' + founder.name"
                  />
                  <br />
                  <span
                    >({{
                      ["Very Easy", "Easy", "Fair", "Hard", "Very Hard"][
                        FoundersInformation.FounderReplicability[count] - 1
                      ]
                    }})</span
                  >
                </td>
              </tr>

              <tr>
                <th scope="row">Is Founder CEO?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="FoundersInformation.FounderIsCEO[count]"
                      name="fceo"
                      :value="founder.name"
                      :id="'fceo'"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Is it this founders idea execution?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="
                        FoundersInformation.FounderIsIdeaExecution[count]
                      "
                      name="fidea"
                      :value="founder.name"
                      :id="'fidea'"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">Founder Initial Capital Contribution</th>
                <td
                  colspan=""
                  v-for="(founder, count) in founderDetails"
                  :key="count"
                >
                  <input
                    class="form-control"
                    type="number"
                    v-model="
                      FoundersInformation.FounderInitialCapitalContribution[
                        count
                      ]
                    "
                    :name="'ficc' + founder.name"
                    :id="'ficc' + founder.name"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>



    <div class="card p-0 mt-3 border-0 col-lg-4 col-md-12 " style="">
      <div class="card-body text-dark">
        <h5 class="card-title">
          <div
          class="results m-auto rounded-2 p-3 mb-5 rounded"
        >
          <div class="progress-stacked row g-0 w-100">
            <div
              v-for="(name, index) in founderDetails"
              :key="index"
              class="progress"
              role="progressbar"
              :aria-label="'Segment' + index"
              :aria-valuenow="equitySplit[index] * 100"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="'width:' + equitySplit[index] * 100 + '%;'"
              :title="
                name.name +
                ' (' +
                Math.round(equitySplit[index] * 100) +
                '%' +
                ')'
              "
            >
              <!-- // -->
              <!-- Standard Color Utility for the Progress Bar, using bootstrap in built contrast text feature by removing 'subtle' from bg color hence it is not supported yet -->
              <div
                class="progress-bar"
                :style="'background-color: ' +colors[((index % founderDetails.length) + founderDetails.length) % founderDetails.length] +';'
                "
              >
                <span class="text-truncate"
                  >{{ name.name }} ({{
                    Math.round(equitySplit[index] * 100)
                  }}%)</span
                >
              </div>
            </div>
          </div>
        </div>
        </h5>
        <div class="card-text p-0 m-0">

          <Pie class="m-auto p-0" :data="chartData" :options="chartOptions" />


          <button type="button" class="btn btn-outline-dark btn-md mt-3" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Share Results</button>
          <div class="collapse m-3" id="collapseExample">
            <div class="card card-body">
              <form action="" @submit.prevent="sendEmailJS">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" v-model="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" :disabled="sendEmail" required>
              </div>
              <input type="hidden" :value="emailMessage" name="message">
              <button class="btn btn-primary" type="submit" :disabled="sendEmail">
                <span v-show="sendEmail" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                Send
              </button>

              <div class="alert alert-light mt-3" role="alert" id="status">
                
              </div>
              
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

import emailjs from 'emailjs-com';

export default {
  name: "StartupDetails",
  props: {
    founderDetails: {
      type: Array,
      required: true,
    },
  },
  components: {
    Pie
  },
  mounted() {
    for (let index = 0; index < this.founderDetails.length; index++) {
      this.FoundersInformation.FounderInvolvementBeforeFunding.push(0);
      this.FoundersInformation.FounderInvolvementInProductDevelopment.push(0);
      this.FoundersInformation.FounderInvolvementInSalesAndMarketing.push(0);
      this.FoundersInformation.FounderInvolvementInOperations.push(0);
      this.FoundersInformation.FounderSalaryBeforeFunding.push(0);
      this.FoundersInformation.FounderYearsOfExperience.push(0);
      this.FoundersInformation.FounderReplicability.push(1);
      this.FoundersInformation.FounderIsCEO.push(0);
      this.FoundersInformation.FounderIsIdeaExecution.push(0);
      this.FoundersInformation.FounderInitialCapitalContribution.push(1);
    }
   
  },
  data() {
    return {
      FoundersInformation: {
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
      },
      colors: [
        "#0d6efd",
        "#6c757d",
        "#198754",
        "#dc3545",
        "#ffc107",
        "#0dcaf0",
      ],
      
      chartOptions:{maintainAspectRatio: true, aspectRatio:0.9, responsive:false},
      email: '',
      sendEmail: false,
      message: 'Equity Split Results: <br><br>' + this.founderDetails.toString(),
    };
  },
  methods:{
    updateChartData(){
      this.chartData.datasets[0].data = [...this.equitySplit.map((value)=>value*100)];
    },
    sendEmailJS(e){
      this.sendEmail = true;
      try {
          emailjs.sendForm('service_5jfox0x', 'template_2jpbi5q' , e.target ,'dhB2CwPRXVzsCCBId', {
            email: this.email,
            message: this.message,
          }).then((result) => {
            console.log(result.text);
            document.getElementById('status').innerHTML = 'Email Sent Successfully';
        }, (error) => {
            console.log(error.text);
            document.getElementById('status').innerHTML = 'Error Sending Email';
        });
      } catch(error) {
        document.getElementById('status').innerHTML = 'Error Sending Email';
          console.log({error})
      }
      // Reset form field
      this.email = ''
      this.message = ''
      this.sendEmail = false;
    }
  },
  computed: {
    emailMessage(){
      //detailed report for all founders

      let message = `Equity Split Report: <br><hr>`;
      for (let i = 0; i < this.founderDetails.length; i++) {
       
        message += `<b>${this.founderDetails[i].name}</b>: <b>${this.equitySplit[i] * 100}%</b><br>`;

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
    chartData(){
         let PieData = {labels: [...this.founderDetails.map((founder) => founder.name)],
            datasets: [
              {
                label: "% of Equity",
                backgroundColor:[...this.colors],
                data:[...this.equitySplit.map((value)=>value*100)],
                borderWidth: 1,
              },
            ],
         }
        return PieData; 
    },
    equitySplit() {
      //for each founder, calculate the equity split, give/take points based on the answers
      let equitySplits = [];
      let totalInvestment =
        this.FoundersInformation.FounderInitialCapitalContribution.reduce(
          (a, b) => parseInt(a) + parseInt(b),
          0
        );
      for (let index = 0; index < this.founderDetails.length; index++) {
        let individualEquity = 0;

        let founderInvolvement = parseFloat(
          this.FoundersInformation.FounderInvolvementBeforeFunding[index]
        );
        let founderIPD =
          parseInt(
            this.FoundersInformation.FounderInvolvementInProductDevelopment[
              index
            ]
          ) / 100;
        let founderISM =
          parseInt(
            this.FoundersInformation.FounderInvolvementInSalesAndMarketing[
              index
            ]
          ) / 100;
        let founderIO =
          parseInt(
            this.FoundersInformation.FounderInvolvementInOperations[index]
          ) / 100;
        let founderSalary =
          this.FoundersInformation.FounderSalaryBeforeFunding[index];

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
          this.FoundersInformation.FounderYearsOfExperience[index] / 10;

        if (founderYOE > 1.0) {
          founderYOE = 1.0;
        } else if (founderYOE < 0.0) {
          founderYOE = 0.0;
        }

        let founderReplicability = parseInt(
          this.FoundersInformation.FounderReplicability[index]
        );

        if (founderReplicability == 0) {
          founderReplicability = 0.0;
        } else {
          founderReplicability /= 5;
        }

        let founderCEO = 0;

        if (this.FoundersInformation.FounderIsCEO[index]) {
          founderCEO = 1;
        } else {
          founderCEO = 0;
        }

        let founderIE = 0;

        if (this.FoundersInformation.FounderIsIdeaExecution[index]) {
          founderIE = 1;
        } else {
          founderIE = 0;
        }

        let founderICC =
          this.FoundersInformation.FounderInitialCapitalContribution[index] /
          totalInvestment;

        //adding up the points, multiplying by the weightage
        individualEquity +=
          founderInvolvement * 5 +
          founderIPD * 3 +
          founderISM * 3 +
          founderIO * 3 +
          founderSalary * 4 +
          founderYOE * 4 +
          founderReplicability * 5 +
          founderCEO * 2 +
          founderIE * 1 +
          founderICC * 4;

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
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
*{
  font: 1em 'Poppins', sans-serif;
}

.progress,
.progress-stacked {
  --bs-progress-height: 1.5rem;
}

.progress-bar:hover {
  border: 1px solid black;
}

.progress-bar {
  transition: width 0.5s ease-in-out;
}
</style>
