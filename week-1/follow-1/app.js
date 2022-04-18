//Create a vue app
Vue.createApp({
    //data holds a function as a value
    data() {
        return {
            goals: [],
            enteredValue: "",
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        },
    },
    //put the app you want to select in the brackets
}).mount("#app");

// With pure Javascript
// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// buttonEl.addEventListener("click", function () {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement("li");
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = "";
// });
