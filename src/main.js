import { createApp } from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
export default{
    components:{
        FontAwesomeIcon,
    }
}

library.add(faUserSecret,  faFacebook);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')