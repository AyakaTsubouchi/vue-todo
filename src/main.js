import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vco from "v-click-outside";


library.add(faUserSecret)
library.add(faTrashCan)


createApp(App).use(vco).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
