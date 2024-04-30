<template>
  <div class="mb-4">
    <label
      class="mr-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="pickupCity"
      >Pickup City:</label
    >
    <select class="select " v-model="pickupCity" id="pickupCity">
      <option v-for="city in cities" :key="city">{{ city }}</option>
    </select>

    <label
      class="mb-2  text-sm font-medium text-gray-900 dark:text-white"
      for="deliveryCity"
      >Delivery City:</label
    >
    <select class="select " v-model="deliveryCity" id="deliveryCity">
      <option v-for="city in cities" :key="city">{{ city }}</option>
    </select>

    <button
      class="bg-pink  p-2 rounded-md text-white border-2 mx-auto flex mt-4 hover:bg-pinkHover"
      @click="calculateDeliveryInfo"
    >
      Calculate Delivery
    </button>

    <div v-if="deliveryInfo">
      <p>Estimated Distance: {{ deliveryInfo.distance.toFixed(2) }} km</p>
      <p>
        Estimated Delivery Time:
        {{ deliveryInfo.deliveryTime.toFixed(2) }} hours
      </p>
    </div>
  </div>
</template>


<script> 
export default {
  
  data() {
    return {
      distanceMatrix: [],
      pickupCity: "",
      deliveryCity: "",
      cities: [
        "Riga",
        "Daugavpils",
        "Liepāja",
        "Jelgava",
        "Jūrmala",
        "Ventspils",
        "Rēzekne",
      ],
      cityCoordinates: {
        Riga: [56.9496, 24.1052],
        Daugavpils: [55.8782, 26.6548],
        Liepāja: [56.5144, 21.0119],
        Jelgava: [56.65, 23.7128],
        Jūrmala: [56.9475, 23.616],
        Ventspils: [57.3894, 21.5606],
        Rēzekne: [56.5097, 27.3243],
      },
      deliveryInfo: null,
    };
  },
  methods: {
    
    calculateDistance(coord1, coord2) {
      const R = 6371;
      const [lat1, lon1] = coord1;
      const [lat2, lon2] = coord2;

      const dLat = this.toRadians(lat2 - lat1);
      const dLon = this.toRadians(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRadians(lat1)) *
          Math.cos(this.toRadians(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = R * c;
      return distance;
    },
    toRadians(degrees) {
      return (degrees * Math.PI) / 180;
    },
    calculateDeliveryInfo() {
      if (!this.pickupCity || !this.deliveryCity) {
        alert("Please select both pickup and delivery cities.");
        return;
      }

      const pickupCoord = this.cityCoordinates[this.pickupCity];
      const deliveryCoord = this.cityCoordinates[this.deliveryCity];

      const distance = this.calculateDistance(pickupCoord, deliveryCoord);

      const deliveryTime = distance / 50; //50km/h

      this.deliveryInfo = {
        distance,
        deliveryTime,
      };
    },
 
   generateDistanceMatrix() {
      const cities = Object.keys(this.cityCoordinates);
      this.distanceMatrix = cities.map((city1) => {
        return cities.map((city2) => {
          if (city1 === city2) return 0;
          return this.calculateDistance(
            this.cityCoordinates[city1],
            this.cityCoordinates[city2]
          );
        });
      });
    },
  },
  created() {
    this.generateDistanceMatrix();
  },

};
</script>
