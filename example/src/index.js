import { createApp } from 'vue'
import App from './App.vue'
// import AlwaysUI from '../../src/index.js'
import AlwaysUI, {Aside, Button, Container, Header, Main} from '../../src/index.js'
import '../../src/styles/index.scss'

// console.log('Full Always UI components: ', AlwaysUI)
console.log('Partial Always UI components: ', Aside, Button, Container, Header, Main)

createApp(App).use(AlwaysUI, 6, true, 'hello').mount('#app')
