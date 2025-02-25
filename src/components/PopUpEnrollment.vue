<template>
  <div>
    <div class="formsec_right">
      <div class="dsu-intro">
        <div class="applyBox">
          <div class="dsu-form rounded p-0 pt-3">
            <div class="frmBg bg-white mb-3">
              <span class="fs-4 text-dark d-inline-block my-3">Enroll Now</span>
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

                  <div class="contact-fild-box">
                    <div class="form-group">
                      <select
                        name="state"
                        id="stateid"
                        @change="select_state_func()"
                        class="form-select"
                        style="cursor: pointer"
                        required
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

                  <div class="contact-fild-box">
                    <div class="form-group">
                      <p id="citypid" class="py-0">
                        <select
                          name="city"
                          id="cityid"
                          class="form-select formbg1"
                          style="cursor: pointer"
                          required
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
                  <div class="contact-fild-box">
                    <div class="form-group">
                      <p id="" class="py-0">
                        <select
                          @change="filterCourse($event)"
                          name="program_name"
                          id="program_val"
                          class="form-select formbg1"
                          style="cursor: pointer"
                          required
                        >
                          <option value="">Select Program*</option>
                          <option
                            :value="program.name"
                            v-for="program in programDetails"
                            :key="program"
                          >
                            {{ program.program_name }}
                          </option>
                        </select>
                      </p>
                    </div>
                  </div>
                  <div class="contact-fild-box">
                    <div class="form-group">
                      <p id="coursepid" class="py-0">
                        <select
                          name="course"
                          id="courseid"
                          class="form-select formbg1"
                          style="cursor: pointer"
                          required
                        >
                          <option value="">Select Course*</option>
                          <template
                            v-for="course in filteredCourses[0]?.course"
                            :key="course"
                          >
                            <option :value="course.name">
                              {{ course.name }}
                            </option>
                          </template>
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
const filteredCourses = ref([]);
const leadForm = ref(null);
const programDetails = ref([
  {
    program_name: "B.Com",
    course: [
      { name: "Accounting & Finance" },
      { name: "Corporate Accounting" },
      { name: "International Finance & Accounting (Accredited by ACCA, UK)" },
      { name: "International Finance (Accredited by ACCA, UK)" },
    ],
  },
  {
    program_name: "BBA",
    course: [
      { name: "Human Resource Management" },
      { name: "Finance" },
      { name: "Marketing" },
      { name: "Digital Marketing" },
      { name: "Data Science and Analytics" },
      { name: "Engineering and Project Management" },
      { name: "Healthcare Management" },
    ],
  },
  {
    program_name: "BCA",
    course: [
      { name: "Computer Science & Information Technology" },
      { name: "Data Science and Analytics" },
      { name: "Cyber Security" },
      { name: "Artificial Intelligence" },
    ],
  },
  {
    program_name: "M.Com",
    course: [
      { name: "Accounting & Finance" },
      {
        name: "Professional Accounting and Finance (Accredited by CPA, US Qualification)",
      },
      { name: "International Finance (Accredited by ACCA, UK)" },
    ],
  },
  {
    program_name: "MBA",
    course: [
      { name: "Strategic Finance (Accredited by CPA, US + CMA, US)" },
      { name: "Human Resource Management" },
      { name: "Finance" },
      { name: "Marketing" },
      { name: "General Management" },
      { name: "Systems and Operations Management" },
      { name: "Finance and Marketing" },
      { name: "Human Resource Management and Finance" },
      { name: "Marketing and Human Resource Management" },
      { name: "Project Management" },
      { name: "Information Technology Management" },
      { name: "Healthcare Management" },
      { name: "Logistics & Supply Chain Management" },
      { name: "Business Intelligence & Analytics" },
      { name: "Entrepreneurship and Leadership" },
      { name: "International Finance (Accredited by ACCA, UK)" },
      { name: "International Business Management" },
      { name: "Sports Management" },
      { name: "Data Science & Analytics" },
      { name: "Digital Marketing & E-commerce" },
      { name: "Digital Finance" },
      { name: "Integrated Marketing" },
      { name: "Strategic HRM" },
      { name: "Banking & Finance" },
      { name: "Retail Banking Operations" },
      { name: "Artificial Intelligence" },
    ],
  },
  {
    program_name: "MCA",
    course: [
      { name: "Computer Science & IT" },
      { name: "Cyber Security" },
      { name: "Data Analytics" },
      { name: "Full Stack Development" },
      { name: "Cloud Computing" },
      { name: "Data Science" },
      { name: "Artificial Intelligence" },
    ],
  },
  {
    program_name: "M.A",
    course: [
      { name: "English" },
      { name: "Public Policy" },
      { name: "Economics" },
    ],
  },
]);
const cityUrl = "https://api.countrystatecity.in/v1/countries/IN/states/";
const apiKey = "RW54RWI5d09URDZSSlN1cFNPQnE3cHpDRXlFY0JTUmxCTE84YXRFYQ==";
async function fetchCities(stateCode) {
  const response = await fetch(`${cityUrl}${stateCode}/cities`, {
    headers: { "X-CSCAPI-KEY": apiKey },
  });
  const cities = await response.json();
  cityDetails.value = cities;
}
function filterCourse(el) {
  console.log(el.target.value);
  let program = el.target.value;
  console.log(program, "program");
  filteredCourses.value = programDetails.value.filter(
    (item) => item.program_name === program
  );
  console.log(filteredCourses.value);
}
function select_state_func() {
  console.log("state_code");
  let stateCode = document.getElementById("stateid").value;
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
    city: leadForm.value.cityid.value,
    state: leadForm.value.stateid.value,
    program: leadForm.value.program_val.value,
    course: leadForm.value.courseid.value,
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
