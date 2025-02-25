<template>
  <div>
    <HeaderViewVue />
    <div class="">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="">S.No</th>

            <th scope="col" class="" v-for="header in headers" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>

        <tbody class="bg-white">
          <tr v-for="(lead, index) in sheetData" :key="lead" class="">
            <td class="">
              {{ index + 1 }}
            </td>
            <td class="">
              {{ lead.name }}
            </td>
            <td class="">
              {{ lead.mail }}
            </td>
            <td class="">
              {{ lead.phone }}
            </td>
            <td class="">
              {{ lead.city }}
            </td>
            <td class="">
              {{ lead.state }}
            </td>
            <td class="">
              {{ lead.program }}
            </td>
            <td class="">
              {{ lead.course }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <FooterView />
  </div>
</template>

<script setup>
import HeaderViewVue from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import { ref } from "vue";
const sheetData = ref([]);
const headers = ref([]);
fetchData();
async function fetchData() {
  let url =
    "https://script.google.com/macros/s/AKfycbxTV48-C3biF-CBP5O6JAY-qtKF6JAVILJFZIRQDqhX2xZq7aMCbsnpp6jBerMHAOIKqw/exec";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      headers.value = Object.keys(data[0]); // Extract column headers
      sheetData.value = data; // Store data for the table
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
</script>

<style></style>
