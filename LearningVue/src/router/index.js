import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CounterComponent from "@/components/CounterComponent.vue";
import LifeCycle from "@/components/lifeCycle.vue";
import Communication from "@/components/Communication.vue";
import ChildComponent from "@/components/ChildComponent.vue";
import Composition from "@/components/Composition.vue";
import Replacing from "@/components/Replacing.vue";
import ComputedComposition from "@/components/ComputedComposition.vue";
import WatcherReplacing from "@/components/WatcherReplacing.vue";
import ProvideInject from "@/components/ProvideInject.vue";
import Basics from "@/components/Basics.vue"
import LifeCycleComposition from "@/components/lifeCycleComposition.vue";
import Styles from "@/components/Styles.vue";
import Home from "@/components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/lifeCycle",
      name: "lifeCycle",
      component: LifeCycle,
    },
    {
      path: "/communication",
      name: "Communication",
      component: Communication,
    },
    {
      path: "/childComponent",
      name: "childComponent",
      component: ChildComponent,
    },
    {
      path: "/Composition",
      name: "composition",
      component: Composition,
    },
    {
      path: "/Replacing",
      name: Replacing,
      component: Replacing,
    },
    {
      path: "/ComputedComposition",
      name: ComputedComposition,
      component: ComputedComposition,
    },
    {
      path: "/WatcherReplacing",
      name: WatcherReplacing,
      component: WatcherReplacing,
    },
    {
      path: "/ProvideInject",
      name: ProvideInject,
      component: ProvideInject,
    },
    {
      path:"/Basics",
      name:Basics,
      component: Basics
    },
    {
      path:'/lifeCycleComposition',
      name:LifeCycleComposition,
      component:LifeCycleComposition
    },
    {
      path:'/styles',
      name:Styles,
      component: Styles
    }
  ],
});

export default router;
