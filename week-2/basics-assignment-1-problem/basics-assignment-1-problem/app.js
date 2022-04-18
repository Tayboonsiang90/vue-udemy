app = Vue.createApp({
    data() {
        return {
            name: "Tay Boon Siang",
            age: 32,
            image: "https://http.cat/100",
        };
    },
    methods: {
        generateRandom() {
            return Math.random();
        },
    },
});
app.mount("#assignment");
