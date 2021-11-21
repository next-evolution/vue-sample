import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import mixinAxios from '@/mixin/axios'

createApp(App)
  .use(VueAxios, axios)
  .mixin(mixinAxios)
  .mount('#app')
