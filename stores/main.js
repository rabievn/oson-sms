export const useMainStore = defineStore("main", {
  state: () => ({
    count: 69,
    text: "Some random text idk",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
