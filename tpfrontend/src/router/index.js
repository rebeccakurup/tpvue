import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      // Notice this has to come before /event/:id
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    }
  ]
})

// const routes = [
//   {
//     path: "/",
//     name: "event-list",
//     component: EventList
//   },
//   {
//     path: "/event/create",
//     name: "event-create",
//     component: EventCreate
//   },
//   {
//     path: "/event/:id",
//     name: "event-show",
//     component: EventShow,
//     props: true
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   routes
// });

// export default router;
