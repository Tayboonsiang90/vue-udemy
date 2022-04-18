app = Vue.createApp({
    //Data must return an object
    //Data must be a function
    //Can use shorthand data(){}
    data: function () {
        return {
            courseGoalA: "Finish the course and learn Vue111!",
            courseGoalB: "<h1>Finish the course and learn Vue222!</h1>",
            vueLink: "https://vuejs.org",
        };
    },
    methods: {
        outputGoal: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
    },
});

app.mount("#user-goal");
