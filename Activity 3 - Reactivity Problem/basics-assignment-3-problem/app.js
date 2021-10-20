const app = Vue.createApp ({
    data () {
        return {
        counter: 0,
        value: 0
        }
    },

    watch: {
        counter(value) {
            if (value >= 37) {
                const guard = this;
                setTimeout(function () {
                    guard.counter = 0;
                }, 5000)
            }
        }
    },

    methods: {
        Plusses(num) {
            this.counter = this.counter + num;
        },
        Plus(num) {
            this.counter = this.counter + num;
        },
        Result() {
            if (this.counter == 0)
            {
                return this.counter;
            }
            else if (this.counter > 0 && this.counter < 37)
            {
                return "Not there yet!";
            }
            else if (this.counter > 37 )
            {
                return "Too much!";
            }

            return this.counter;
        },

    },
});

app.mount('#assignment');