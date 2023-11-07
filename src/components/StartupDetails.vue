<template>
  <div class="form">
    <!-- Calculation Form -->

    <div class="results w-75 m-auto">
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
          >
            <div class="progress-bar progress-bar-striped" :class="colors[index]">{{ name.name }} ({{ Math.round(equitySplit[index] * 100) }}%)</div>
            
          </div>
        
      </div>
    </div>

    <!-- for each founder have the similar form -->
    <div class="row p-5">
      <div
        class="founder-form col text-start"
        v-for="(founder, count) in founderDetails"
        :key="count"
      >
        <table class="table table-hover">
          <thead class="table-active">
            <tr>
              <th scope="col">{{ founder.name }}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <th scope="row">
                How much will this founder be engaged in this company before it
                raises funds?
              </th>
              <td class="">
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
                How much will this founder will be involved in product
                development? ({{
                  FoundersInformation.FounderInvolvementInProductDevelopment[
                    count
                  ]
                }}%)
              </th>
              <td>
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
              <th scope="row">Involvement in Sales and Marketing</th>
              <td colspan="2" class="">
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
                How much will this founder will be involved in Operations?
              </th>
              <td colspan="2" class="">
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
                How much will this founder take as a salary (monthly) before
                funding?
              </th>
              <td colspan="2">
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
                Years of experience they bring to the table in her/his primary
                field of responsibility?
              </th>
              <td colspan="2">
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
                How hard or easy is it replace or replicate this founder's
                contribution? (0-Very Easy, 5-Very Hard)
              </th>
              <td colspan="2">
                <input
                  type="range"
                  class="form-range"
                  v-model="FoundersInformation.FounderReplicability[count]"
                  step="1"
                  min="0"
                  max="5"
                  :name="'frep' + founder.name"
                  :id="'frep' + founder.name"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Is Founder CEO?</th>
              <td colspan="2">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    v-model="FoundersInformation.FounderIsCEO"
                    name="fceo"
                    :value="founder.name"
                    :id="'fceo'"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">Is it this founders idea execution?</th>
              <td colspan="2">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    v-model="FoundersInformation.FounderIsIdeaExecution"
                    name="fidea"
                    :value="founder.name"
                    :id="'fidea'"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">Founder Initial Capital Contribution</th>
              <td colspan="2">
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
      this.FoundersInformation.FounderReplicability.push(0);
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
          "bg-primary",
          "bg-secondary",
          "bg-success",
          "bg-danger",
          "bg-warning",
          "bg-info",
          "bg-light",
          "bg-dark",
        ],
    };
  },
  computed: {
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
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

        if (
          this.FoundersInformation.FounderIsCEO.toString() ===
          this.founderDetails[index].name.toString()
        ) {
          
          founderCEO = 1;
        } else {
          
          founderCEO = 0;
        }

        let founderIE = 0;

        if (
          this.FoundersInformation.FounderIsIdeaExecution.toString() ===
          this.founderDetails[index].name.toString()
        ) {
          
          founderIE = 1;
        } else {
          
          founderIE = 0;
        }

        let founderICC =
          this.FoundersInformation.FounderInitialCapitalContribution[index] /
          totalInvestment;

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
      for (let index = 0; index < equitySplits.length; index++) {
        equitySplits[index] = equitySplits[index] / totalEquity;
      }

      return equitySplits;
    },
  },
};
</script>

<style scoped></style>
