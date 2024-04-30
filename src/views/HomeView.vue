<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="h-screen">
    <div class="h-full relative">
      <img
        src="../assets/homeBG.jpeg"
        alt="Omniva Image"
        class="w-full bg-cover h-full"
      />
      <div class="absolute inset-0">
        <p
          class="pt-3 bg-transparent opacity-30 font-bold font-mono uppercase flex justify-center items-center text-10xl"
        >
          Welcome
        </p>
        <div class="flex flex-col justify-center items-center">
          <RouterLink to="/about" class="linksOnHomePage bg-purple hover:"
            >About us</RouterLink
          >
          <RouterLink
            to="/order"
            class="linksOnHomePage bg-pink hover:bg-pinkHover"
            >Make an order</RouterLink
          >
          <RouterLink
            to="/account"
            class="linksOnHomePage bg-yellow hover:bg-yellowHover"
            >Account</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
