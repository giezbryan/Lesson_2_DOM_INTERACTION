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
    }


});

app.mount('#assignment');