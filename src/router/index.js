import { createRouter, createWebHistory } from 'vue-router'
import AsideComponent from "@/components/AsideComponent.vue";
import ChronoComponent from "@/components/ChronoComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";
import HomeView from "@/views/HomeView.vue"
import ConnectView from "@/views/ConnectView.vue"
import FirstSectionPageComponent from "@/components/FirstSectionPageComponent.vue";
import SecondSectionPageComponent from "@/components/SecondSectionPageComponent.vue";
import ThirthSectionPageComponent from "@/components/ThirdSectionPageComponent.vue";
import ForthSectionPageComponent  from "@/components/ForthSectionPageComponents.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '',name: 'home',component: HomeView,
      children:[{path:'',name: 'Section', component: SectionComponent,
                  children:[{path:'' ,name:'page1', component:FirstSectionPageComponent},
                            {path:'/SectionPage2' ,name:'page2', component:SecondSectionPageComponent},
                            {path:'/SectionPage3' ,name:'page3', component:ThirthSectionPageComponent},
                            {path:'/SectionPage4' ,name:'page4', component:ForthSectionPageComponent}
                    
                  ]


                }
              ]
    },
    {path: '/Connect', name: 'Connect',component: () => import('@/views/ConnectView.vue'),
      children:[{path:'',name: 'Formulaire', component: FormComponent}]
    },
    {path: '',name: '',component: HomeView}
    
      
      
      

    
  ]
})

export default router
