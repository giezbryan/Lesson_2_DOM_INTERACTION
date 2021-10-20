const app = Vue.createApp ({
    data () {
        return {
            Result1: "",
            Result2: ""
        }
    },
    methods: {
        DisplayAlert() {
            alert('Alert! Alert! Alert!')
        },
        SetOutput1(event) {
            this.Result1 = event.target.value
        },
        SetOutput2(event) {
            this.Result2 = event.target.value
        }
    }
});

app.mount('#assignment');