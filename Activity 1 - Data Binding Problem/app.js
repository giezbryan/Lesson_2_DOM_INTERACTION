const app = Vue.createApp ({
    data () {
        return {
            Name : 'Mark Bryan A. Chua',
            Age : 20,
            url : "http://vuejs.org/images/logo.png"
        };
    },
    methods: {
        PlusAge() {
            return this.Age + 5;
        },
        FavoriteNumber() {
            const RandomNumber = Math.random();
            if (RandomNumber < 0.5)
            {
                return "0";
            }
            else
            {
                return "1";
            }
        }
    }
});

app.mount('#assignment');