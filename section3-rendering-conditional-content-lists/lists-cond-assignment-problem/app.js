const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            enteredTaskValue: '',
            showList: true
        };
    },
    computed:{
        btnTitle(){
            if(this.showList) return 'Hide list';
            return 'Show list';
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = ''
        },
        showOrHide(){
            this.showList = !this.showList;
        }
    }
})
app.mount("#assignment")