<template>

  <div class="details w-100 row">

    <div class="form">
      <!-- Calculation Form -->
  
      <div class="results w-100 p-4 bg-body-secondary rounded-2 m-auto fixed-top">
        
        <div class="progress-stacked">
            <div
              v-for="(name, index) in founderDetails" :key="index"
              class="progress"
              role="progressbar"
              :aria-label="'Segment'+index"
              :aria-valuenow="equitySplit[index] * 100"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="'width:' + equitySplit[index] * 100 + '%;'"
              :title="name.name + ' ('+ Math.round(equitySplit[index] * 100) + '%' + ')' "
              > 
              <!-- // -->
              <!-- Standard Color Utility for the Progress Bar, using bootstrap in built contrast text feature by removing 'subtle' from bg color hence it is not supported yet -->
              <div class="progress-bar" :class="colors[index] + ' text-'+colors[index].replace('-subtle','')"><span class="text-truncate" >{{ name.name }} ({{ Math.round(equitySplit[index] * 100) }}%)</span></div>
              
            </div>
          
        </div>
      </div>
  
      <!-- for each founder have the similar form -->
      <div class="row p-5" style="place-content:;">
        <div class="tables table-responsive-xxl founder-form col-auto text-start" style="" >
          <table class="table table-hover ">
          
            <thead class="table-active">
              <tr>
                <th scope="col"></th>
                <th v-for="(founder,count) in founderDetails" :key="count" scope="col">
                  {{ founder.name }}
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <th scope="row">
                  Founder engagment before this company before
                  raising funds?
                </th>
                <td class="" v-for="(founder, count) in founderDetails" :key="count">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      :name="'fibf' + founder.name"
                      id="flexRadioDefault1"
                      value="1"
                      v-model="
                        FoundersInformation.FounderInvolvementBeforeFunding[count]
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
                        FoundersInformation.FounderInvolvementBeforeFunding[count]
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
                        FoundersInformation.FounderInvolvementBeforeFunding[count]
                      "
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Part-Time
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Founder involvement in product
                  development?
                </th>
                <td v-for="(founder, count) in founderDetails" :key="count">
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      FoundersInformation.FounderInvolvementInProductDevelopment[
                        count
                      ]
                    "
                    :name="'fipd' + founder.name"
                    :id="'sliderfipd' + founder.name"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Founder involvement in Sales and Marketing</th>
                <td colspan="" class="" v-for="(founder, count) in founderDetails" :key="count">
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
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  Founder involvement in Operations? 
                </th>
                <td colspan="" class="" v-for="(founder, count) in founderDetails" :key="count">
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
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  Founder salary ($monthly) before
                  funding?
                </th>
                <td colspan="" v-for="(founder, count) in founderDetails" :key="count">
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
                  Years of experience in her/his primary
                  field?
                </th>
                <td colspan="" v-for="(founder, count) in founderDetails" :key="count">
                  <input
                    class="form-control"
                    type="number"
                    v-model="FoundersInformation.FounderYearsOfExperience[count]"
                    :name="'fyoe' + founder.name"
                    :id="'fyoe' + founder.name"
                  />
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  Founder Contribution Replicability? 
                </th>
                <td colspan="" v-for="(founder, count) in founderDetails" :key="count">
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
                  <br>
                  <span>({{ ["Very Easy", "Easy", "Fair", "Hard", "Very Hard"][FoundersInformation.FounderReplicability[count] - 1] }})</span>
                </td>
                
              </tr>
  
              <tr>
                <th scope="row">Is Founder CEO?</th>
                <td colspan="" v-for="(founder, count) in founderDetails" :key="count">
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
                <td colspan="" v-for="(founder, count) in founderDetails" :key="count">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="FoundersInformation.FounderIsIdeaExecution[count]"
                      name="fidea"
                      :value="founder.name"
                      :id="'fidea'"
                    />
                  </div>
                </td>
              </tr>
  
              <tr>
                <th scope="row">Founder Initial Capital Contribution</th>
                <td colspan="" v-for="(founder, count) in founderDetails" :key="count">
                  <input
                    class="form-control"
                    type="number"
                    v-model="
                      FoundersInformation.FounderInitialCapitalContribution[count]
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
  
  </div>


</template>

<script>

export default {
  name: "StartupDetails",
  props: {
    founderDetails: {
      type: Array,
      required: true,
    },
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
    //shuffle colors array randomly
    for (let index = 0; index < this.colors.length; index++) {
      let randomIndex = Math.floor(Math.random() * this.colors.length);
      let temp = this.colors[index];
      this.colors[index] = this.colors[randomIndex];
      this.colors[randomIndex] = temp;
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
        "bg-primary",
        "bg-primary-subtle",
        "bg-secondary",
        "bg-secondary-subtle",
        "bg-success",
        "bg-success-subtle",
        "bg-danger",
        "bg-danger-subtle",
        "bg-warning",
        "bg-warning-subtle",
        "bg-info",
        "bg-info-subtle"
        ],
    };
  },
  methods: {
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
  computed: {
    
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

        if (
          this.FoundersInformation.FounderIsCEO[index]
        ) {
          founderCEO = 1;
        } else {
          
          founderCEO = 0;
        }

        let founderIE = 0;

        if (
          this.FoundersInformation.FounderIsIdeaExecution[index]
        ) {
          founderIE = 1;
        } else {
          
          founderIE = 0;
        }

        let founderICC =
          this.FoundersInformation.FounderInitialCapitalContribution[index] /
          totalInvestment;

        //adding up the points, multiplying by the weightage
        individualEquity +=
          founderInvolvement * (5) +
          founderIPD * (3) +
          founderISM * (3) +
          founderIO * (3)+
          founderSalary * (4) +
          founderYOE * (4) +
          founderReplicability * (5) +
          founderCEO * (2) +
          founderIE * (1)+
          founderICC * (4);

          equitySplits.push(individualEquity);
      }

      //normalize the equity splits
      let totalEquity = equitySplits.reduce((a, b) => a + b, 0);
      for (let index = 0; index < equitySplits.length; index++) {
        equitySplits[index] = equitySplits[index] / totalEquity;
      }

      return equitySplits;
    },
  },
};
</script>

<style scoped>
.progress, .progress-stacked {
  --bs-progress-height: 3rem;
}

.progress-bar:hover {
  border: 1px solid black;
}


.progress-bar {
  transition: width 0.5s ease-in-out;
}
</style>
