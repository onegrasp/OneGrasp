<template>
  <div>
    <div class="registerarea__form">
      <div class="registerarea__form__heading">
        <h4>Fill Your Registration</h4>
      </div>
      <form action="#">
        <div class="row">
          <div class="col-lg-6">
            <input
              class="register__input"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div class="col-xl-6">
            <input
              class="register__input"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div class="col-xl-6">
            <input class="register__input" type="tel" placeholder="Phone" />
          </div>

          <div class="col-xl-6">
            <select
              class="form-select"
              name="university"
              id="university"
              onchange="filterPrograms()"
            >
              <option value="jain">JAIN Online</option>
              <option value="vignan">Vignan Online</option>
              <option value="yenepoya">Yenepoya Online</option>
              <option value="sharada">Sharada Online</option>
            </select>
          </div>
          <div class="col-xl-6">
            <select
              class="form-select"
              name="program"
              id="program"
              onchange="filterCourses()"
            >
              <option value="" disabled selected>Select Program</option>
            </select>
          </div>
          <div class="col-xl-6">
            <select class="form-select" name="course" id="course"></select>
          </div>

          <div class="col-lg-12 mt-2 mt-lg-4">
            <textarea
              class="register__input textarea"
              placeholder="message"
              name="#"
              id="#"
              cols="10"
              rows="5"
            ></textarea>
          </div>
        </div>

        <div class="registerarea__button">
          <a class="default__button" href="#"
            >Sign Up
            <i class="icofont-long-arrow-right"></i>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import RegistrationPage from "@/components/RegistrationView.vue";

const data = {
  jain: {
    mba: [
      "Human Resource Management",
      "Finance",
      "Marketing",
      "General Management",
      "Systems and Operations Management",
      "Finance and Marketing",
      "Human Resource Management and Finance",
    ],
    bcom: [
      "Accounting & Finance",
      "Global Taxation",
      "Financial Markets",
      "International Finance (Accredited by ACCA, UK)",
      "International Finance & Accounting (Accredited by ACCA, UK)",
      "Strategic Finance (Syllabus integrated with CMA, US)",
    ],

    BBA: [
      "Human Resource Management",
      "Finance",
      "Marketing",
      "Digital Marketing",
      "Data Science and Analytics",
      "Engineering and Project Management",
      "Healthcare Management",
    ],

    BCA: [
      "Computer Science & Information Technology",
      "Data Science and Analytics",
      "Cloud Computing",
      "Cyber Security ",
      "Artificial Intelligence",
      "Accounting & Finance",
    ],

    MCom: [
      "International Finance (Accredited by ACCA, UK)",
      "Global Taxation",
      "Financial Markets",
      "Accounting & Finance",
      "Professional Accounting and Finance (Accredited by CPA, US Qualification)",
    ],

    MBA: [
      "Human Resource Management",
      "Finance",
      "Marketing",
      "General Management",
      "Systems and Operations Management",
      "Finance and Marketing",
      "Human Resource Management and Finance",
      "Marketing and Human Resource Management",
      "Project Management",
      "Information Technology Management",
      "Healthcare Management",
      "Logistics & Supply Chain Management ",
      "Business Intelligence & Analytics",
      "Entrepreneurship and Leadership",
      "International Finance (Accredited by ACCA, UK)",
      "Data Science & Analytics",
      "Digital Marketing & E-commerce",
      "Banking & Finance",
      "Retail Banking Operations",
      "Artificial Intelligence",
      "Strategic Accounting (Syllabus integrated with CMA, US)",
    ],

    MCA: [
      "Computer Science & IT",
      "Cyber Security",
      "Data Analytics",
      "Full Stack Development",
      "Cloud Computing",
      "Data Science",
      "Artificial Intelligence",
    ],
  },
  vignan: {
    BBA: ["General"],
    BCA: ["Computer Science and Information Technology"],
    MBA: ["Human Resource Management", "Finance"],
    MBAGeneral: [
      "Marketing",
      "Business Analytics",
      "Finance and Human Resource Management",
      "Healthcare and Hospital Management",
      "Information Technology",
    ],
    MCA: ["Computer Science and Information Technology", "Data Science"],
  },
  yenepoya: {
    BCom: [
      "International Finance and Accounting (Accredited by ACCA, UK)",
      "Accounting and Finance",
    ],
    BBA: [
      "General Management",
      "Logistics and Supply Chain Management",
      "Healthcare Management",
    ],
    BCA: [
      "Computer Science and IT",
      "Cloud computing and Cyber Security",
      "Multimedia and Animation",
    ],
  },
  sharada: {
    BA: ["Political Science"],
    MBA: [
      "Finance",
      "Marketing",
      "Human Resource Management",
      "Healthcare and hospital administration",
    ],
    MCA: ["Computer Science and Information Technology", "Data Science"],
  },
};

// Filter programs based on selected university
function filterPrograms() {
  const universitySelect = document.getElementById("university");
  const programSelect = document.getElementById("program");
  const courseSelect = document.getElementById("course");

  const selectedUniversity = universitySelect.value;

  // Clear previous options
  programSelect.innerHTML = '<option value="">Select Program</option>';
  courseSelect.innerHTML = '<option value="">Select Course</option>';

  // Populate programs
  if (data[selectedUniversity]) {
    const programs = Object.keys(data[selectedUniversity]);
    programs.forEach((program) => {
      const option = document.createElement("option");
      option.value = program;
      option.textContent = program.toUpperCase() + " Program";
      programSelect.appendChild(option);
    });
  }
}

// Filter courses based on selected program
function filterCourses() {
  const universitySelect = document.getElementById("university");
  const programSelect = document.getElementById("program");
  const courseSelect = document.getElementById("course");

  const selectedUniversity = universitySelect.value;
  const selectedProgram = programSelect.value;

  // Clear previous options
  courseSelect.innerHTML = '<option value="">Select Course</option>';

  // Populate courses
  if (data[selectedUniversity] && data[selectedUniversity][selectedProgram]) {
    const courses = data[selectedUniversity][selectedProgram];
    courses.forEach((course) => {
      const option = document.createElement("option");
      option.value = course.toLowerCase().replace(/ /g, "-");
      option.textContent = course;
      courseSelect.appendChild(option);
    });
  }
}
</script>

<style></style>
