<template>
  <div class="login">
    <form class="login__form" @submit.prevent="loginRequest">
      <h1>Welcome</h1>
      <div class="login__input-container">
        <label for="email">Email</label>
        <input type="email" name="email" class="input-field" v-model="email" />
      </div>
      <div class="login__input-container">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="input-field"
          v-model="password"
        />
      </div>

      <div class="link-register">
        Don't have an account?
        <span><router-link to="/register">Sign Up</router-link></span>
      </div>
      <button
        class="btn-login"
        :disabled="isLoading"
        :class="{ 'btn-disable': isLoading === true }"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import router from "../router/index";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },

  methods: {
    async loginRequest() {
      this.isLoading = true;
      if (!localStorage.getItem("registered")) {
        alert("Not register yet");
        router.push("register");
      } else if (localStorage.getItem("registered")) {
        await axios
          .post("https://reqres.in/api/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            if (
              res.data.token ===
              JSON.parse(localStorage.getItem("registered")).token
            ) {
              alert("Login succeed");
              router.push("dashboard");
            }
          })
          .catch((err) => alert(err.response.data.error))
          .then(() => this.isLoading = false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;

  &__form {
    width: 30%;
    margin-top: 100px;

    .link-register a {
      color: #0278ae;
    }

    h1 {
      margin-bottom: 24px;
    }

    .btn-login {
      width: 100%;
      padding: 10px;
      cursor: pointer;
      background-color: #0278ae;
      border: none;
      color: white;
      border-radius: 4px;
      text-transform: uppercase;
      margin-top: 10px;

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
