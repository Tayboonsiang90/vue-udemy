const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: "",
        };
    },
    methods: {
        setName(event, additionalName) {
            //default event object is provided when there is no specified input
            this.name = event.target.value + " " + additionalName;
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        increment(num) {
            this.counter = this.counter + num;
        },
        decrement(num) {
            this.counter = this.counter - num;
        },
        submitForm(event) {
            event.preventDefault();
            alert("Submitted!");
        },
    },
});

app.mount("#events");
