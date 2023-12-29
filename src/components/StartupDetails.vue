
<template>

  <nav class="navbar bg-body-tertiary m-auto">
    <div class="container">
      <p class="navbar-brand mb-0 h1 text-start">Founder Equity Details</p>
    </div>
  </nav>


  <div class="details w-100 m-0 row">
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
                  v-for="(founder, count) in store.founderDetails"
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
                  How much will this founder be engaged in this company before it raises funds?
                </th>
                <td
                  class=""
                  v-for="(founder, count) in store.founderDetails"
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
                        store.founderInformation.FounderInvolvementBeforeFunding[
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
                        store.founderInformation.FounderInvolvementBeforeFunding[
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
                        store.founderInformation.FounderInvolvementBeforeFunding[
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
                <th scope="row">Allocate how much each founder will be involved in product development.</th>
                <td v-for="(founder, count) in store.founderDetails" :key="count">
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      store.founderInformation
                        .FounderInvolvementInProductDevelopment[count]
                    "
                    :name="'fipd' + founder.name"
                    :id="'sliderfipd' + founder.name"
                  />
                  ({{lpad(FoundersInformation.FounderInvolvementInProductDevelopment[count],3)}}%)
                </td>
              </tr>
              <tr>
                <th scope="row">Allocate how much each founder will be involved in sales and marketing. </th>
                <td
                  colspan=""
                  class=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      store.founderInformation.FounderInvolvementInSalesAndMarketing[
                        count
                      ]
                    "
                    :name="'fism' + founder.name"
                    :id="'sliderfism' + founder.name"
                  />

                  ({{lpad(store.founderInformation.FounderInvolvementInSalesAndMarketing[count],3)}}%)
                </td>
              </tr>

              <tr>
                <th scope="row">Allocate how much each founder will be involved in operations. </th>
                <td
                  colspan=""
                  class=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <input
                    class="form-range"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    v-model="
                      store.founderInformation.FounderInvolvementInOperations[count]
                    "
                    :name="'fiio' + founder.name"
                    :id="'sliderfiio' + founder.name"
                  />
                  ({{lpad(store.founderInformation.FounderInvolvementInOperations[count],3)}}%)
                </td>

               
              </tr>

              <tr>
                <th scope="row">Founder salary ($monthly) before funding?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <input
                    class="form-control"
                    type="number"
                    
                    v-model="
                      store.founderInformation.FounderSalaryBeforeFunding[count]
                    "
                    min="0"
                    @keydown="$event.key === '-' ? $event.preventDefault() : null" 
                    @copy.prevent 
                    @paste.prevent
                    :name="'fsbf' + founder.name"
                    :id="'fsbf' + founder.name"
                  />
                </td>

                
              </tr>

              <tr>
                <th scope="row">
                  How many years of experience is this co-founder bringing to the table in her or his
primary field of responsibility? 
                </th>
                <td
                  colspan=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <input
                    class="form-control"
                    type="number"
                    v-model="
                      store.founderInformation.FounderYearsOfExperience[count]
                    "
                    min="0"
                    @keydown="$event.key === '-' ? $event.preventDefault() : null" 
                    @copy.prevent 
                    @paste.prevent
                    :name="'fyoe' + founder.name"
                    :id="'fyoe' + founder.name"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">How hard or easy is it replace or replicate this founder's contribution? </th>
                <td
                  colspan=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <input
                    type="range"
                    class="form-range"
                    v-model="store.founderInformation.FounderReplicability[count]"
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
                        store.founderInformation.FounderReplicability[count] - 1
                      ]
                    }})</span
                  >
                </td>
              </tr>

              <tr>
                <th scope="row">Is Founder CEO?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="store.founderInformation.FounderIsCEO[count]"
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
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="
                        store.founderInformation.FounderIsIdeaExecution[count]
                      "
                      name="fidea"
                      :value="founder.name"
                      :id="'fidea'"
                    />
                  </div>
                </td>
              </tr>
              <!-- 
                @keydown="$event.key === '-' ? $event.preventDefault() : null" 
              @copy.prevent 
              @paste.prevent 
                Prevents copy-pasting, negative values, and reducing to below 0
            -->
              <tr>
                <th scope="row">Will this founder be making an initial capital contribution and, if so, how much?</th>
                <td
                  colspan=""
                  v-for="(founder, count) in store.founderDetails"
                  :key="count"
                >
                  <input
                    class="form-control"
                    type="number"
                    v-model="
                      store.founderInformation.FounderInitialCapitalContribution[
                        count
                      ]
                    "
                    min="0"
                    @keydown="$event.key === '-' ? $event.preventDefault() : null" 
                    @copy.prevent 
                    @paste.prevent
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
              v-for="(name, index) in store.founderDetails"
              :key="index"
              class="progress"
              role="progressbar"
              :aria-label="'Segment' + index"
              :aria-valuenow="store.equitySplit[index] * 100"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="'width:' + store.equitySplit[index] * 100 + '%;'"
              :title="
                name.name +
                ' (' +
                Math.round(store.equitySplit[index] * 100) +
                '%' +
                ')'
              "
            >
              <!-- // -->
              <div
                class="progress-bar"
                :style="'background-color: ' +colors[((index % store.founderDetails.length) + store.founderDetails.length) % store.founderDetails.length] +';'
                "
              >
                <span class="text-truncate"
                  >{{ name.name }} ({{
                    Math.round(store.equitySplit[index] * 100)
                  }}%)</span
                >
              </div>
            </div>
          </div>
        </div>
        </h5>
        <div class="card-text p-0 m-0">

          <Pie class="m-auto p-0" :data="chartData" :options="chartOptions" />

          <button type="button" class="btn btn-outline-primary btn-md mt-3" data-bs-toggle="collapse" data-bs-target="#collapseFounders" aria-expanded="false" aria-controls="collapseExample">Modify Founders</button>
          <button type="button" class="btn btn-outline-dark btn-md mt-3" data-bs-toggle="collapse" data-bs-target="#collapseEmail" aria-expanded="false" aria-controls="collapseExample" @click="submitForm">View Results</button>

          <div class="collapse m-3" id="collapseEmail">
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

          <div class="collapse m-3" id="collapseFounders">
            <div class="card card-body">
              <form @submit.prevent="submitForm" class="w-100 m-auto">
                <div
                  class="form-floating"
                  v-for="(founder, index) in founders"
                  :key="index"
                >
                  <input
                    type="text"
                    class="form-control rounded-bottom-0 mb-2"
                    :id="'founder' + index"
                    v-model="founder.name"
                    :required="index < 2"
                    placeholder="Founder Name"
                  />
                  <label :for="'founder' + index">Founder {{ index + 1 }}</label>
                  <p class="text-start my-2 m-1">
                  <a
                    href="#"
                    class="link-body-emphasis text-start text-danger link-offset-2 link-underline-opacity-0"
                    @click="store.removeFounder(index)"
                    v-show="founders.length > 2"
                    >Remove Founder <i class="bi bi-trash"></i
                  ></a>
                </p>
                </div>
                <p class="text-start my-2 m-1">
                  <a
                    href="#"
                    class="link-body-emphasis link-offset-2 link-underline-opacity-25"
                    @click="addFounder"
                    v-show="founders.length < 4"
                    >Add Founder <i class="bi bi-plus"></i
                  ></a>
                </p>
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
import { useStore } from "@/stores/piniaStore";

export default {
  name: "StartupDetails",
  setup() {
    const store = useStore(); 
    return { store };
  },
  emits: ["to-final-results"],
  components: {
    Pie,
  },
  mounted() {
    this.store.initFounders();
  },
  data() {
    return {
      founders: this.store.founderDetails,
      FoundersInformation: this.store.founderInformation,
      colors: [
        "#D72638",
        "#3F88C5",
        "#F49D37",
        "#140F2D",
        "#183059",
      ],
      chartOptions:{maintainAspectRatio: true, aspectRatio:0.9, responsive:false},
      email: '',
      sendEmail: false,
      message: 'Equity Split Results: <br><br>' + this.store.founderDetails.toString(),
    };
  },
  methods:{
    //pad the number with zeroes, easier to read, have same length
    lpad(value, padding){
      var zeroes = new Array(padding+1).join("0");
      return (zeroes + value).slice(-padding);
    },
    //2 add founder methods, one for the inital list and the other to add additional founders and init their values
    addFounder() {
      this.store.founderDetails.push({ name: "" });
      let founderIndex = this.store.founderDetails.length - 1;
      //init all values
      this.store.reInitFounder(founderIndex);
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
    },
    submitForm() {
      this.$emit(
        "to-final-results",
        this.FoundersInformation
      );
    },
  },
  computed: {
    emailMessage(){
      //detailed report for all founders, compiled into an email message
      let message = `Equity Split Report: <br><hr>`;
      for (let i = 0; i < this.store.founderDetails.length; i++) {
       
        message += `<b>${this.store.founderDetails[i].name}</b>: <b>${this.store.equitySplit[i] * 100}%</b><br>`;

        if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 0)
          message += `Founder Involvement Before Funding: None<br>`;
        else if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 0.5)
          message += `Founder Involvement Before Funding: Part-Time<br>`;
        else if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 0.8)
          message += `Founder Involvement Before Funding: Full-Time<br>`;
        else if(this.FoundersInformation.FounderInvolvementBeforeFunding[i] == 1)
          message += `Founder Involvement Before Funding: Exclusive<br>`;
        else
          message += `Founder Involvement Before Funding: ${this.FoundersInformation.FounderInvolvementBeforeFunding[i] }<br>`;

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
         let PieData = {labels: [...this.store.founderDetails.map((founder) => founder.name)],
            datasets: [
              {
                label: "% of Equity",
                backgroundColor:[...this.colors],
                data:[...this.store.equitySplit.map((value)=>value*100)],
                borderWidth: 1,
              },
            ],
         }
        return PieData; 
    },
   
  }
};
</script>

<style scoped>
.progress,
.progress-stacked {
  --bs-progress-height: 1.5rem;
}

.progress-bar {
  transition: width 0.5s ease-in-out;
}
</style>
