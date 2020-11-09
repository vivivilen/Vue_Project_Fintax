<template>
  <div class="calculator-container">
    <SideNavBar />

    <div class="calc">
      <div class="calc-input">
        <div class="input-number">
          <label>Number 1: </label>
          <input type="number" v-model="number1" />
        </div>
        <div class="input-number">
          <label>Number 2: </label>
          <input type="number" v-model="number2" />
        </div>
        <div class="input-number">
          <label>Result: </label>
          <input readonly type="number" v-model="result" />
        </div>
        <div class="btn-op">
          <button
            class="op"
            name="plus"
            @click="calc(number1, number2, 'plus')"
          >
            +
          </button>
          <button
            class="op"
            name="minus"
            @click="calc(number1, number2, 'minus')"
          >
            -
          </button>
          <button
            class="op"
            name="multiplication"
            @click="calc(number1, number2, 'multiplication')"
          >
            x
          </button>
          <button
            class="op"
            name="division"
            @click="calc(number1, number2, 'division')"
          >
            /
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavBar from "./SideNavbar";

export default {
  name: "Calculator",
  data() {
    return {
      number1: 0,
      number2: 0,
      result: "",
    };
  },
  components: {
    SideNavBar,
  },
  methods: {
    calc(num1, num2, op) {
      num1 = Number(num1);
      num2 = Number(num2);
      switch (op) {
        case "plus":
          this.result = num1 + num2;
          break;
        case "minus":
          this.result = num1 - num2;
          break;
        case "multiplication":
          this.result = num1 * num2;
          break;
        case "division":
          this.result = num1 / num2;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator-container {
  display: flex;
  flex-direction: row;

  .calc {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .calc-input {
      width: fit-content;
      margin: auto;
    }

    .input-number {
      text-align: right;
      margin: auto;
      padding: 8px;

      input[type="number"] {
        padding: 5px;
        margin-left: 10px;

        :focus {
          outline: none;
        }
      }
    }

    .btn-op {
      .op {
        width: 40px;
        height: 40px;
        background: #0278ae;
        color: white;
        border: none;
        border-radius: 50%;
        margin: 5px;

        &:hover {
          background: lighten(#0278ae, 5%);
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
