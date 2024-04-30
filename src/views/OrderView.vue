<script setup></script>
<template>
  <main class="h-screen">
    <div class="bg-purple h-full">
      <p
        class="break-normal bg-transparent opacity-30 font-bold font-mono uppercase text-center text-9xl"
      >
        Make an order
      </p>
      <form
        @submit.prevent="makeOrder"
        class="my-7 max-w-xl mx-auto p-10 rounded-xl"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="label">Name</label>
            <input
              placeholder="Name"
              class="input"
              type="text"
              required
              v-model="order.customerName"
            />
          </div>
          <div>
            <label class="label">Email</label>
            <input
              placeholder="Email"
              class="input"
              type="email"
              required
              v-model="order.email"
            />
          </div>

          <div>
            <label class="label">Phone Number</label>
            <input
              placeholder="Phone Number"
              class="input"
              type="text"
              required
              v-model="order.phoneNumber"
            />
          </div>
          <div>
            <label class="label">City From</label>
            <input
              placeholder="City From"
              class="input"
              type="text"
              required
              v-model="order.cityFrom"
            />
          </div>
          <div>
            <label class="label">City to:</label>
            <input
              placeholder="City to"
              class="input"
              type="text"
              required
              v-model="order.cityTo"
            />
          </div>
          <div>
            <label class="label">Price:</label>
            <input placeholder="City to" class="input" type="number" required />
          </div>
        </div>
        <div class="text-center flex items-center justify-center">
          <button
            type="submit"
            class="bg-pink border-none py-3 px-5 mt-5 text-white rounded-md"
          >
            Registration
          </button>
        </div>
        <DeliveryCalculator />
      </form>
    </div>
  </main>
</template>

<script>
import DeliveryCalculator from "@/components/DeliveryCalculator.vue";
import axios from "axios";
export default {
  components: {
    DeliveryCalculator,
  },
  data() {
    return {
      order: {
        customerName: "",
        email: "",
        phoneNumber: "",
        cityTo: "",
        cityFrom: "",
      },
    };
  },
  methods: {
    async makeOrder() {
      try {
        const response = await axios.post(
          "http://localhost:3333/order",
          this.order
        );
        this.$router.push({
          name: "tyfororder",
          params: { userId: response.data.id },
        });
      } catch (error) {}
    },
  },
};
</script>
