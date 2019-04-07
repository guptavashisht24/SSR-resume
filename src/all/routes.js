import Home from './Home'
import Grid from './Grid'

const routes =  [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/routing/:id',
        component: Grid,

    }
]

export default routes;