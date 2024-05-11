<template>
  <div class="h-screen">
    <div class="h-full relative">
      <div class="absolute inset-0 flex flex-col justify-between">
        <div class="flex flex-col justify-center items-center">
          <p class="pt-16 pb-8 bg-transparent opacity-30 font-bold font-mono uppercase flex justify-center items-center text-8xl">
            Atvērto transporta datu izmantošana
          </p>
          <RouterLink to="/about" class="circleLink bg-red-500 hover:bg-red-600 mb-4">About us</RouterLink>
          <RouterLink to="/order" class="circleLink bg-yellow hover:bg-yellowHover mb-4">Map</RouterLink>
          <RouterLink to="/account" class="circleLink bg-green-500 hover:bg-green-600">Account</RouterLink>
        </div>
        <img src="../assets/homeBG.jpeg" alt="Stacija" class="w-full bg-cover h-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.circleLink {
  width: 125px;
  height: 125px;
  border-radius: 50%; /* Ensures the element is a circle */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
}
</style>
