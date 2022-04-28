<template>
  <div class="app-content" v-if="authenticate.isAuthenticated">
    <Navbar />
    <router-view></router-view>
  </div>
  <div class="app-login" v-else>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import { useAuthentication } from "./stores/authenticate";

const authenticate = useAuthentication();
console.log(authenticate.isAuthenticated);
</script>

<style>
* {
  margin: 0px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
.app-content {
  display: flex;
  flex-direction: column;
}

.app-login {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
