<template>
  <div>
    <div class="formsec_right">
      <div class="dsu-intro">
        <div class="applyBox">
          <div class="dsu-form rounded p-0 pt-3">
            <div class="frmBg bg-white mb-3">
              <span class="fs-4 text-dark d-inline-block my-3"
                >Enquire Now</span
              >
            </div>

            <div class="contact_fild">
              <form
                ref="leadForm"
                @submit.prevent="submitForm()"
                name="contact-form"
              >
                <div class="formIDfid">
                  <div class="contact-fild-box">
                    <div class="form-group">
                      <input
                        name="name"
                        id="name"
                        class="form-control"
                        placeholder="Name*"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div class="contact-fild-box">
                    <div class="form-group">
                      <input
                        name="email"
                        id="mail"
                        class="form-control"
                        placeholder="Email*"
                        maxlength="30"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div class="contact-fild-box">
                    <div class="form-group">
                      <input
                        class="form-control"
                        id="phone"
                        type="tel"
                        maxlength="10"
                        placeholder="Mobile*"
                        name="phone"
                        pattern="[6-9]{1}[0-9]{9}"
                        title="Phone number with 6-9 and remaing 9 digit with 0-9"
                        required
                      />
                    </div>
                  </div>

                  <div class="contact-fild-box d-none">
                    <div class="form-group">
                      <select
                        name="state"
                        id="stateid_popup"
                        @change="select_state_func()"
                        class="form-select"
                        style="cursor: pointer"
                      >
                        <option value="" default selected disabled>
                          Select State*
                        </option>
                        <option
                          v-for="state in stateDetails"
                          :key="state"
                          :value="state.iso2"
                          :state-name="state.name"
                        >
                          {{ state.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="contact-fild-box d-none">
                    <div class="form-group">
                      <p id="citypid" class="py-0">
                        <select
                          name="city"
                          id="cityid"
                          class="form-select formbg1"
                          style="cursor: pointer"
                        >
                          <option value="">Select City*</option>
                          <option
                            :value="city.name"
                            v-for="city in cityDetails"
                            :key="city"
                          >
                            {{ city.name }}
                          </option>
                        </select>
                      </p>
                    </div>
                  </div>

                  <div class="contact-fild-box mt-4">
                    <div class="form-group">
                      <button
                        id="btnSubmit"
                        type="submit"
                        class="btn btn_submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import axios from "axios";
const stateDetails = ref([]);
const cityDetails = ref([]);

const leadForm = ref(null);

const cityUrl = "https://api.countrystatecity.in/v1/countries/IN/states/";
const apiKey = "RW54RWI5d09URDZSSlN1cFNPQnE3cHpDRXlFY0JTUmxCTE84YXRFYQ==";
async function fetchCities(stateCode) {
  const response = await fetch(`${cityUrl}${stateCode}/cities`, {
    headers: { "X-CSCAPI-KEY": apiKey },
  });
  const cities = await response.json();
  cityDetails.value = cities;
}

function select_state_func() {
  let stateCode = document.getElementById("stateid_popup").value;
  fetchCities(stateCode);
}

const stateUrl = "https://api.countrystatecity.in/v1/countries/IN/states";

async function fetchStates() {
  const response = await fetch(stateUrl, {
    headers: { "X-CSCAPI-KEY": apiKey },
  });
  stateDetails.value = await response.json();
}

async function submitForm() {
  console.log(leadForm.value.stateid, leadForm.value.cityid);
  let form = {
    name: leadForm.value.name.value,
    mail: leadForm.value.mail.value,
    phone: leadForm.value.phone.value,
    city: "--",
    state: "--",
    program: "--",
    course: "--",
    time: new Date(),
    uploadby: "Enquire",
  };
  let url =
    "https://script.google.com/macros/s/AKfycbxA8UidAA2a4eLZNCd5svy-HPmCu6VhRQdM5iIv1fVN8ScEBKwC-OIrCk1Vox2zcExU5g/exec";

  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    console.log(response);
    alert("Form submitted successfully!");
    leadForm.value.reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit form.");
  }
}

// Initialize States on page load
fetchStates();
</script>

<style></style>
