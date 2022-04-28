<template>
  <div class="login">
    <div class="cred">
      <label for="mobile">Mobile Number</label>
      <input type="text" id="mobile" v-model="formdata.mobilenumber" />
    </div>
    <div class="otp">
      <button class="otp-button" @click="send">Send OTP</button>
    </div>
    <div class="cred">
      <label for="otp">OTP </label>
      <input type="text" id="otp" v-model="formdata.otp" />
    </div>
    <div class="cred">
      <button class="submit" @click="submit">Submit</button>
      <button class="cancel">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useAuthentication } from "@/stores/authenticate";
import { useRouter } from "vue-router";

const router = useRouter();
const formdata = reactive({
  mobilenumber: "",
  otp: "",
});

const auth = useAuthentication();

// const submit = async () => {
//   const response = await axios.post("http://localhost:3000/", formdata);
//   const jsondata = await response.data;
//   const data = JSON.parse(jsondata);
//   auth.isAuthenticated = data.authenticated;
//   router.replace("/product");
// };
const submit = () => {
  auth.isAuthenticated = true;
  router.replace("/product");
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 30px;
  border: 1px solid rgb(155, 155, 155);
  border-radius: 3px;
  box-shadow: 5px 5px rgb(188, 188, 188);
}

.cred {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
}

.submit {
  color: white;
  background-color: rgb(199, 65, 65);
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.cancel {
  color: white;
  background-color: rgb(160, 160, 160);
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

label {
  padding-right: 20px;
}

.otp {
  display: flex;
  flex-direction: row;
  padding-right: 20px;
  justify-content: end;
}
.otp-button {
  background-color: green;
  padding: 5px 10px;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}
</style>
