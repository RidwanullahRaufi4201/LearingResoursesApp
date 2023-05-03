import { createApp } from 'vue'
import App from './App.vue'
import ButtonBase from './components/UI/ButtonBase.vue'


const app=createApp(App)

app.component('Button-Base',ButtonBase)
app.mount('#app')

