import { lazy } from "react"
const Home = lazy(() => import('./components/Home'))
const login = lazy(() => import('./components/AuthComponents/Login'))
const CreateMission = lazy(() => import('./components/Pages/Mission/CreateMission'))
const ListMission = lazy(() => import('./components/Pages/Mission/ListMission'))
const ListEmployee = lazy(() => import('./components/Pages/Employee/ListEmployee'))
const CreateEmployee = lazy(() => import('./components/Pages/Employee/CreateEmployee'))
const routes = [
    {
        path: '/',
        element: login,
        name: 'login',
        exact: true
    },
    {
        path: '/home',
        element: Home,
        name: 'Home',
        exact: true
    },
    {
        path: '/missions/add',
        element: CreateMission,
        name: 'Add mission',
        exact: true
    },
    {
        path: '/missions',
        element: ListMission,
        name: 'mission List',
        exact: true
    },
    {
        path: '/employee/add',
        element: CreateEmployee,
        name: 'Add employee',
        exact: true
    },
    {
        path: '/employees',
        element: ListEmployee,
        name: 'List employee',
        exact: true
    },

]

export default routes