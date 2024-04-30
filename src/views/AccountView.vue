<template>
  <div class="h-screen">
    <div class="bg-pink h-full">
      <p
        class="pt-3 bg-transparent opacity-30 font-bold font-mono uppercase flex justify-center items-centers text-9xl"
      >
        Login
      </p>
      <form
        @submit.prevent="loginUser"
        class="max-w-xs my-7 mx-auto p-10 rounded-xl"
      >
        <label
          class="inline-block tracking-wide text-white opacity-50 uppercase font-bold"
          >Email</label
        >
        <input
          class="block mb-2 py-3 outline-none px-2 w-full box-border text-slate-600 rounded-md"
          type="email"
          required
          v-model="user.email"
        />
        <label
          class="inline-block mb-2 tracking-wide text-white opacity-50 uppercase font-bold"
          >Password</label
        >
        <input
          class="block py-3 mb-2 outline-none px-2 w-full box-border text-slate-600 rounded-md"
          type="password"
          required
          v-model="user.password"
        />

        <div class="text-center flex place-content-between">
          <RouterLink
            to="/auth/register"
            class="bg-signUpBtn border-none py-3 px-5 mt-5 text-white rounded-md"
            >Register now</RouterLink
          >
          <button
            type="submit"
            class="bg-loginBtn border-none py-3 px-5 mt-5 text-white rounded-md hover:bg-yellowHover"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    axios.get("http://localhost:3333/users").then((res) => {
      console.log(res.data);
    });
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(
          "http://localhost:3333/auth/login",
          this.user
        );
        this.$router.push({
          name: "UserProfile",
          params: { userId: response.data.id },
        });
      } catch (error) {}
    },
  },
};
</script>
