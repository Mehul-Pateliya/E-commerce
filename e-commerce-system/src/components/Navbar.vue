<template>
  <div class="nav">
    <div class="left-nav-items">
      <router-link to="/product" class="nav-item">Product List</router-link>
      <router-link to="/card" class="nav-item">Card</router-link>
      <router-link to="/poll" class="nav-item">Poll</router-link>
    </div>
    <div class="right-nav-items">
      <div @click="logout" class="nav-item">Logout</div>
    </div>
  </div>
</template>

<script setup>
import { useAuthentication } from "@/stores/authenticate";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthentication();

const logout = () => {
  // auth.isAuthenticated = false;
  // router.replace("/product");
  console.log("logout");
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(200, 141, 255);
  padding: 15px;
  color: white;
}

.nav-item {
  padding: 0px 20px;
  text-decoration: none;
  color: white;
}

.left-nav-items {
  display: flex;
  flex-direction: row;
}
</style>
