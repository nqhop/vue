const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText)
    },
  },
  beforeCreate(){
    // you could send an HTTP request to a server,.. whatever you need to do
    console.log('beforeCreate()')
  },
  created(){
    console.log("created()")
  }
});

app.mount('#app');
