<template>
  <div class="dashboard">
    <SideNavbar />
    <Table
      v-if="!isLoading"
      :employees="employees"
      :tableHeader="tableHeader"
    />
    <div v-else class="loader">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Table from "../components/Table";
import SideNavbar from "../components/SideNavbar";

export default {
  name: "Dashboard",
  data() {
    return {
      isLoading: true,
      tableHeader: [
        { key: "employee_name", sortable: false },
        { key: "employee_salary", sortable: true },
        { key: "employee_age", sortable: true },
      ],
      employees: [],
    };
  },
  components: {
    Table,
    SideNavbar,
  },
  async created() {
    this.isLoading = true;
    await axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => {
        console.log(res);

        let data = res.data.data;
        data.forEach((d) => {
          this.employees.push(d);
        });
      })
      .catch((err) => {
        if (err.response.status === 429) {
          alert("Too many request. Please refresh!");
          console(err.response);
        }
      })
      .then(() => (this.isLoading = false));
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100vw;
  display: flex;
  flex-direction: row;

  .loader {
    margin: auto;
    width: 100%;
  }
}
</style>
