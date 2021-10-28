const app = Vue.createApp ({
    data()
    {
        return {
            userfield: "",
            user: "",
            button: true,
            color: "",
            selectColor: ''
        };
    },
    methods: {
        set(event){
            this.userfield = event.target.value;
            if(this.userfield === 'user1'){
                this.user = 'user1';
            } else if (this.userfield === 'user2') {
                this.user = 'user2';
            } else {
                this.user = '';
            }
        },
        togglebutton(){
            this.button = !this.button;
        },
        Colorfield(event){
            this.color = event.target.value;
            if(this.color === 'green') {
                this.selectColor = this.color;
            } else if (this.color === 'yellow') {
                this.selectColor = this.color;
            } else if (this.color === 'red') {
                this.selectColor = this.color;
            } else {
                this.selectColor = '';
            }
        }
    }
});

app.mount('#assignment');