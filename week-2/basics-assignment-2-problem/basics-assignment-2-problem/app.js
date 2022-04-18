const app = Vue.createApp({
    data() {
        return {
            messageWritten: "",
        };
    },
    methods: {
        buttonPress() {
            alert("Kekistani");
        },
        messageEvent() {
            this.messageWritten = event.target.value;
        },
    },
});
