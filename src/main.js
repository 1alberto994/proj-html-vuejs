import { createApp } from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Swiper,{Navigation,Pagination} from'swiper';
import'swiper/css/bundle';
export default{
    components:{
        FontAwesomeIcon,
    }
}

library.add(faUserSecret,  faFacebook, faTwitter, faTelegram, faPhone, faEnvelope);

createApp(App)


.component('font-awesome-icon', FontAwesomeIcon,  Swiper)
.mount('#app')