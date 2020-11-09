<template>
  <div class="side-navbar">
    <div class="navbar-menu">
      <ul>
        <router-link to="/dashboard">
          <li>
              <b-icon icon="house-door-fill" aria-hidden="true" class="icon"></b-icon>
            Dashboard
          </li>
        </router-link>
        <router-link to="/calculator">
          <li>
              <b-icon icon="calculator" aria-hidden="true" class="icon"></b-icon>
            Simple Calculator
          </li>
        </router-link>
        <li class="li-logout" @click="logOut">
          <b-icon icon="power" aria-hidden="true" class="icon"></b-icon>
          Log Out
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from '../router/index';

export default {
  name: "SideNavbar",
  methods: {
      logOut() {
          localStorage.removeItem('loginUser');
          alert('You have been logout.')
          router.push({path: '/'});
      }
  }
};
</script>

<style lang="scss" scoped>
.side-navbar {
  min-width: 200px;
  width: 22%;
  height: auto;
  background: #24344b;

  .navbar-menu {
    height: 100vh;
    padding-top: 30px;
    width: 100%;

    .icon {
        width: 18px;
        height: 18px;
        margin-right: 16px;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100%;

      a {
        text-decoration: none;

        &.router-link-active {
            background-color: lighten(#24344b, 10%);
        }
      }

      li {
        font-size: 15px;
        text-align: left;
        cursor: pointer;
        display: block;
        padding: 15px 20px;
        color: rgba(211, 211, 211, 90%);

        &:hover {
          background-color: lighten(#24344b, 10%);
        }
      }
    }
  }
}
</style>
