<template>
  <div class="register">
    <form class="register__form" @submit.prevent="registerRequest">
      <h1>Register</h1>
      <div class="register__input-container">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="input-field"
          v-model="email"
          required
        />
      </div>
      <div class="register__input-container">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="input-field"
          v-model="password"
          required
        />
      </div>
      
      <button
        class="btn-register"
        :disabled="isLoading"
        :class="{ 'btn-disable': isLoading === true }"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router/index';

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    async registerRequest() {
      this.isLoading = true;
      await axios
        .post("https://reqres.in/api/register", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem('registered', JSON.stringify(res.data));
          alert('Register success!');
          router.push({ path: '/'});
        })
        .catch((err) => {
          alert(err.response.data.error + '\n' + 'or you can use this email: emma.wong@reqres.in for register');
        })
        .then(() => {
          this.isLoading = false
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;

  &__form {
    width: 30%;
    margin-top: 100px;

    h1 {
      margin-bottom: 24px;
    }

    .btn-register {
      width: 100%;
      padding: 10px;
      cursor: pointer;
      background-color: #0278ae;
      border: none;
      color: white;
      border-radius: 4px;
      text-transform: uppercase;

      &:hover {
        background-color: lighten(#0278ae, 5%);
      }

      &:focus {
        outline: none;
      }
    }

    .btn-disable {
      background: grey;
      cursor: wait;

      &:hover {
        background: grey;
      }
    }
  }

  &__input-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 16px;

    .input-field {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid lightgrey;

      &:focus {
        outline: none;
      }
    }

    label {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
}
</style>
