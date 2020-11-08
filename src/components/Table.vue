<template>
  <div class="table-container">
    <b-table
      hover
      :items="listEmployee"
      :fields="tableHeader"
      :per-page="perPage"
      :current-page="currPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      bordered
    ></b-table>

    <form @submit.prevent="showDataPerPage" class="form-show-data">
      <label for="show-data">Show data per-page: </label>
      <input
        type="number"
        placeholder="Show data per-page"
        class="input-per-page"
        v-model="showData"
      />
    </form>

    <b-pagination
      v-model="currPage"
      :total-rows="total"
      :per-page="perPage"
      align="center"
      @input="updatePage(currPage)"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["employees", "tableHeader"],
  data() {
    return {
      sortBy: "id",
      sortDesc: false,
      currPage: 1,
      perPage: 6,
      showData: 6,
      total: this.employees.length,
      listEmployee: this.employees,
    };
  },
  methods: {
    updatePage(currPage) {
      this.$router.replace({ query: { page: currPage } });
    },
    showDataPerPage() {
      if (this.showData > this.total) {
        this.showData = this.total;
      }
      this.perPage = this.showData;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-container {
  margin: 30px 30px 0 30px;
  width: 100%;
}

.form-show-data {
  margin-bottom: 20px;

  .input-per-page {
    border: 1px solid lightgrey;
    padding: 8px;
    border-radius: 4px;
    margin-left: 10px;

    &:focus {
      outline: none;
    }
  }
}
</style>
