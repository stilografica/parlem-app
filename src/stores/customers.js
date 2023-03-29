import { defineStore } from "pinia"
import axios from "axios";

export const useCustomersStore = defineStore("customers", {
  state: () => ({
    customersData: [],
  }),
  getters: {
    getCustomer(state) {
      return (id) => {
        for (const customer of state.customersData) {
          if (customer.id == id) {
            return customer
          }
        }
      }
    }
  },
  actions: {
    async getCustomers() {
      try {
        const request = await axios.get("http://localhost:3000/customers");
        this.customersData = request.data;
      } catch (err) {
        throw Error(err);
      }
    },
  },
});
