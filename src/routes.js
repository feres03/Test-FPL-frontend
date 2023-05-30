import { lazy } from "react"
const Home = lazy(() => import('./components/Home'))
const login = lazy(() => import('./components/AuthComponents/Login'))
const CreateMission = lazy(() => import('./components/Pages/Mission/CreateMission'))
const ListMission = lazy(() => import('./components/Pages/Mission/ListMission'))
const ListEmployee = lazy(() => import('./components/Pages/Employee/ListEmployee'))
const Affect = lazy(() => import('./components/Pages/Employee/Affect'))
const UpdateMission = lazy(() => import('./components/Pages/Mission/updateMission'))
const CreateEmployee = lazy(() => import('./components/Pages/Employee/CreateEmployee'))
const UpdateEmployee = lazy(() => import('./components/Pages/Employee/updateEmployee'))


const routes = [
    {
        path: '/login',
        element: login,
        name: 'Login',
        exact: true
    },
    {
        path: '/Home',
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
        path: '/Updatemission/:id',
        element: UpdateMission,
        name: 'update mission',
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
    {
        path: '/UpdateEmployee/:id',
        element: UpdateEmployee,
        name: 'update employee',
        exact: true
    },
    {
        path: '/Affect/:id',
        element: Affect,
        name: 'Affect employee',
        exact: true
    },

]

export default routes