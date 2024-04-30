<template>
  <div class="h-screen">
    <div class="bg-purple h-full">
      <p
        class="pt-3 bg-transparent opacity-30 font-bold font-mono uppercase text-center text-8xl"
      >
        Account
      </p>
      <div class="account-page">
        <header class="account-header">
          <div class="account-details">
            <div class="account-name">
              <p class="account-name">kurjer</p>
            </div>
            <button class="edit-button">Edit</button>
          </div>
        </header>

        <main class="order-list">
          <table class="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>From</th>
                <th>To</th>
                <th>Delivery Date</th>
                <th>Order Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.from }}</td>
                <td>{{ order.to }}</td>
                <td>{{ order.deliveryDate }}</td>
                <td>{{ order.status }}</td>
              </tr>
            </tbody>
          </table>
        </main>
        <footer>
          <div class="flex justify-end">
            <button class="route-button" @click="showRouteMessage">
              Make Route
            </button>
          </div>
          <p v-if="routeMessageShown">{{ routeMessage }}</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        // Sample order data
        {
          id: "#00001",
          from: "Riga",
          to: "Daugavpils",
          deliveryDate: "03.02.2024",
          status: "Waiting",
        },
        {
          id: "#00002",
          from: "Daugavpils",
          to: "Rezekne",
          deliveryDate: "03.02.2024",
          status: "Waiting",
        },
        {
          id: "#00003",
          from: "Rezekne",
          to: "Liepaja",
          deliveryDate: "05.02.2024",
          status: "Delivery",
        },
        {
          id: "#00004",
          from: "Daugavpils",
          to: "Riga",
          deliveryDate: "03.02.2024",
          status: "Waiting",
        },
        {
          id: "#00005",
          from: "Ventspils",
          to: "Jelgava",
          deliveryDate: "06.02.2024",
          status: "Waiting",
        },
        {
          id: "#00006",
          from: "Liepaja",
          to: "Jūrmala",
          deliveryDate: "03.02.2024",
          status: "Waiting",
        },

        // Add the rest of the orders here
      ],
      routeMessage:
        "Route created: Riga-->Daugavpils-->Rezekne-->Ventspils-->Liepaja-->Jelgava-->Riga-->Jūrmala ",
      routeMessageShown: false,
    };
  },
  methods: {
    // Define your methods here
    showRouteMessage() {
      this.routeMessageShown = !this.routeMessageShown;
    },
  },
};
</script>

<style scoped>
.account-page {
  background-color: #ff4b4b;
  color: #fff;
  padding: 5px;
}

.account-header {
  text-align: center;
}

.account-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.account-name-email {
  text-align: left;
}

.edit-button {
  background-color: #e04040;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.order-list {
  margin-top: 20px;
}

.orders-table {
  margin-left: 100px;
  width: 90%;
  border-collapse: collapse;
}

.orders-table th,
.orders-table td {
  padding: 10px;
  border: 1px solid #fff;
  text-align: center;
}

.route-button {
  display: flex;
  justify-content: end;
  align-items: center;

  margin: 10px;
  background-color: #d13030;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}

/* Add more styles as needed */
</style>
