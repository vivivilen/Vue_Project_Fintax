<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <Table />
  </div>
</template>

<script>
import axios from "axios";
import Table from '../components/Table';

export default {
  name: "Dashboard",
  components: {
      Table
  },
  created() {
    let id = JSON.parse(localStorage.getItem("registered")).id;

    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  },
};
</script>

<style lang="scss" scoped>
    .dashbaord {
        text-align: center;
    }
</style>
