import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'
import resource from './resource'
import store from './store'

Vue.use(ElementUI);


import apiDefault from './unit/config'
Vue.use(apiDefault);

// Vue.component('pic');

router.beforeEach((to,from,next) => {
  // 验证登陆状态
  if (localStorage.loginStatus === 'login') {
    if (to.path === '/login') {
      return next({path: '/dataStatistics'});
    }
    next();
  } else {
    if (to.path !== '/login') {
      return next({path: '/login'});
    }else {
      next();
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  resource,
  store,
});


