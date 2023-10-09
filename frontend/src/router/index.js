import {createRouter, createWebHistory} from 'vue-router'

import store from '../store';
import Home from '../components/pages/home.vue'
import Nav from '../components/pages/navigation/qce_nav.vue'
import Response from '../components/pages/response.vue'
import ResponseForm from '../components/pages/response_form.vue'
import Evaluation from '../components/pages/qce_evaluation.vue'
import Commitment from '../components/pages/commitment/commitment.vue'
import Commitmentq2 from '../components/pages/commitment/commitmentq2.vue'
import Commitmentq3 from '../components/pages/commitment/commitmentq3.vue'
import Commitmentq4 from '../components/pages/commitment/commitmentq4.vue'
import Commitmentq5 from '../components/pages/commitment/commitmentq5.vue'
import Knowledge from '../components/pages/knowledge/knowledge.vue'
import Knowledgeq2 from '../components/pages/knowledge/knowledgeq2.vue'
import Knowledgeq3 from '../components/pages/knowledge/knowledgeq3.vue'
import Knowledgeq4 from '../components/pages/knowledge/knowledgeq4.vue'
import Knowledgeq5 from '../components/pages/knowledge/knowledgeq5.vue'
import Independent from '../components/pages/Independent/independent.vue'
import Independentq2 from '../components/pages/Independent/independentq2.vue'
import Independentq3 from '../components/pages/Independent/independentq3.vue'
import Independentq4 from '../components/pages/Independent/independentq4.vue'
import Independentq5 from '../components/pages/Independent/independentq5.vue'
import Management from '../components/pages/Management/management.vue'
import Managementq2 from '../components/pages/Management/managementq2.vue'
import Managementq3 from '../components/pages/Management/managementq3.vue'
import Managementq4 from '../components/pages/Management/managementq4.vue'
import Managementq5 from '../components/pages/Management/managementq5.vue'
import Comments from '../components/pages/comments.vue'
import Review from '../components/pages/review.vue'
import QCEReportiaas from '../components/pages/qcereport/qcereportsiaas.vue'
import QCEReportic from '../components/pages/qcereport/qcereportsic.vue'
import QCEReportilegg from '../components/pages/qcereport/qcereportsilegg.vue'
import QCEReportited from '../components/pages/qcereport/qcereportsited.vue'
import QCEReportiads from '../components/pages/qcereport/qcereportiads.vue'
import FacultyReportiaas from '../components/pages/facultyreport/facultyreportiaas.vue'
import FacultyReportic from '../components/pages/facultyreport/facultyreportic.vue'
import FacultyReportilegg from '../components/pages/facultyreport/facultyreportilegg.vue'
import FacultyReportited from '../components/pages/facultyreport/facultyreportited.vue'
import FacultyReportiads from '../components/pages/facultyreport/facultyreportiads.vue'
import Pdfreport from '../components/pages/pdfreport.vue'
import Printreport from '../components/pages/printreport.vue'
import Choose from '../components/pages/choose.vue'
import Quiz from '../components/pages/quiz.vue'
import History from '../components/pages/history.vue'
import ViewEvaluation from '../components/pages/view_evaluation.vue'
import ViewEvaluationManager from '../components/pages/view_evaluation_manager.vue'
import Login from '../components/pages/auth/login.vue'
import CreateRating from '../components/pages/RatingPeriod/create-rating_period.vue'
import RatingPeriod from '../components/pages/RatingPeriod/index.vue'
import EditRating from '../components/pages/RatingPeriod/edit.vue'
import User from '../components/pages/user/index.vue'
import CreateUser from '../components/pages/user/create.vue'
import EditUser from '../components/pages/user/edit.vue'


const routes =[


    
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {requiresLogin: true},
    },
    {
        path: '/nav',
        name: 'Nav',
        component: Nav,
        meta: {requiresLogin: true},
    },
    {
        path: '/response',
        name: 'Response',
        component: Response,
        meta: {requiresLogin: true},
    },
    {
        path: '/response_form',
        name: 'ResponseForm',
        component: ResponseForm,
        meta: {requiresLogin: true},
    },
    {
        path: '/qceevaluation',
        name: 'Evaluate',
        component: Evaluation,
        meta: {requiresLogin: true},
    },
    {
        path: '/commitment',
        name: 'Commitment',
        component: Commitment,
        meta: {requiresLogin: true},
    },
    {
        path: '/commitmentq2',
        name: 'Commitmentq2',
        component: Commitmentq2,
        meta: {requiresLogin: true},
    },
    {
        path: '/commitmentq3',
        name: 'Commitmentq3',
        component: Commitmentq3,
        meta: {requiresLogin: true},
    },
    {
        path: '/commitmentq4',
        name: 'Commitmentq4',
        component: Commitmentq4,
        meta: {requiresLogin: true},
    },
    {
        path: '/commitmentq5',
        name: 'Commitmentq5',
        component: Commitmentq5,
        meta: {requiresLogin: true},
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Knowledge,
        meta: {requiresLogin: true},
    },
    {
        path: '/knowledgeq2',
        name: 'Knowledgeq2',
        component: Knowledgeq2,
        meta: {requiresLogin: true},
    },
    {
        path: '/knowledgeq3',
        name: 'Knowledgeq3',
        component: Knowledgeq3,
        meta: {requiresLogin: true},
    },
    {
        path: '/knowledgeq4',
        name: 'Knowledgeq4',
        component: Knowledgeq4,
        meta: {requiresLogin: true},
    },
    {
        path: '/knowledgeq5',
        name: 'Knowledgeq5',
        component: Knowledgeq5,
        meta: {requiresLogin: true},
    },
    {
        path: '/independent',
        name: 'Independent',
        component: Independent,
        meta: {requiresLogin: true},
    },
    {
        path: '/independentq2',
        name: 'Independentq2',
        component: Independentq2,
        meta: {requiresLogin: true},
    },
    {
        path: '/independentq3',
        name: 'Independentq3',
        component: Independentq3,
        meta: {requiresLogin: true},
    },
    {
        path: '/independentq4',
        name: 'Independentq4',
        component: Independentq4,
        meta: {requiresLogin: true},
    },
    {
        path: '/independentq5',
        name: 'Independentq5',
        component: Independentq5,
        meta: {requiresLogin: true},
    },
    {
        path: '/management',
        name: 'Management',
        component: Management,
        meta: {requiresLogin: true},
    },
    {
        path: '/managementq2',
        name: 'Managementq2',
        component: Managementq2,
        meta: {requiresLogin: true},
    },
    {
        path: '/managementq3',
        name: 'Managementq3',
        component: Managementq3,
        meta: {requiresLogin: true},
    },
    {
        path: '/managementq4',
        name: 'Managementq4',
        component: Managementq4,
        meta: {requiresLogin: true},
    },
    {
        path: '/managementq5',
        name: 'Managementq5',
        component: Managementq5,
        meta: {requiresLogin: true},
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments,
        meta: {requiresLogin: true},

    },
    {
        path: '/review',
        name: 'Review',
        component: Review,
        meta: {requiresLogin: true},
    },
    {
        path: '/qcereportiaas',
        name: 'QCEReportiaas',
        component: QCEReportiaas,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/qcereportic',
        name: 'QCEReportic',
        component: QCEReportic,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/qcereportited',
        name: 'QCEReportited',
        component: QCEReportited,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/qcereportilegg',
        name: 'QCEReportilegg',
        component: QCEReportilegg,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/qcereportiads',
        name: 'QCEReportiads',
        component: QCEReportiads,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/facultyreportiaas',
        name: 'FacultyReportiaas',
        component: FacultyReportiaas,
        meta: {requiresLogin: true},
    }, 
  
    {
        path: '/facultyreportilegg',
        name: 'FacultyReportilegg',
        component: FacultyReportilegg,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/facultyreportic',
        name: 'FacultyReportic',
        component: FacultyReportic,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/facultyreportited',
        name: 'FacultyReportited',
        component: FacultyReportited,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/facultyreportiads',
        name: 'FacultyReportiads',
        component: FacultyReportiads,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/pdfreport',
        name: 'Pdfreport',
        component: Pdfreport,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/printreport',
        name: 'Printreport',
        component: Printreport,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/choose',
        name: 'Choose',
        component: Choose,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {requiresLogin: true},
    }, 
    {
        path: '/view-evaluation',
        name: 'ViewEvaluation',
        component: ViewEvaluation,
        meta: {requiresLogin: true},
    },
    {
        path: '/view-evaluation-manager',
        name: 'ViewEvaluationManager',
        component: ViewEvaluationManager,
        meta: {requiresLogin: true},
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {requiresVisitor: true},
    },
    {
        path: '/rating-period/create',
        name: 'CreateRating',
        component: CreateRating,
        meta: {requiresLogin: true},
    },
    {
        path: '/rating-period',
        name: 'RatingPeriod',
        component: RatingPeriod,
        meta: {requiresLogin: true},
    },
    {
        path: '/rating-period/edit',
        name: 'EditRating',
        component: EditRating,
        meta: {requiresLogin: true},
    },
    {
        path: '/users',
        name: 'User',
        component: User,
        meta: {requiresLogin: true},
    },
    {
        path: '/user/create',
        name: 'CreateUser',
        component: CreateUser,
        meta: {requiresLogin: true},
    },,
    {
        path: '/user/edit',
        name: 'EditUser',
        component: EditUser,
        meta: {requiresLogin: true},
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    let user =localStorage.getItem('access_token');
    console.log(user)
     console.log(store.state.user)
    // console.log(store.state.user)
    // console.log(record.meta.requiresAuth)
    // if (to.matched.some(record => record.meta.requiresAuth)){
    //     if(routerAuthCheck){
    //         next();
    //     }
    //     else{
    //         next('/')
    //     }
    // }
    // else{
    //   next();
    // }
    // if (to.meta.requiresAuth && !user){
    //     router.replace({path: '/'});
    //     return
    // }
    if (to.matched.some((record) => record.meta.requiresLogin)) {
        if (!user) {
          next({ path: "/login" });
        } 
        else {
          next();
        }
      } 
      // if user is logged in and go to log in page redirect them to home page
      else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (user) {
          next({ path: '/'});
        }
        else {
          next();
        }
      }
      // 
      else {
        next();
      }
    
  });

// router.beforeEach((to, from, next) => {
//   next()
//     let user = store.state.user;
//     // let user = "haha";
    
//     if (to.matched.some(rec => rec.meta.alreadyAuth)) {
//         if (user) {
//             if (user.role == "Student") {
//                 // import.meta.env.VITE_VUE_APP_BASE_URL
//                 next({
//                     path: '/'
//                 })
//             }
//         } 
//     } else if(!user){
//         next({
//             path: '/login'
//         });
//     }
// })
//     // if (to.matched.some(rec => rec.meta.alreadyAuth)) {
//     //     if (user) {
//     //         if (usertype.id == 1){
//     //             next({
//     //             path: '/'
//     //             })
//     //         }
//     //     }
//     //     else if (!user) {
//     //       next()
//     //     }
//     // }else {
//     //       next({
//     //           path: '/login'
//     //       })
//     //     }
//   })
  
export default router