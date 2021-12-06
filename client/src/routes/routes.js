import Main from "../components/main/Main";
import ListMovies from "../pages/listpage/ListMovies";
import MoviePage from "../pages/moviepage/MoviePage";
import NotFound from "../pages/NotFound";
import Login from '../components/loginform/Login';
import Register from '../components/registerform/Register';


const routes = [
    {
        path: "/",
        exact: true, 
        component: Main
    },
    {
        path: "/login",
        exact: true, 
        component: Login
    },
    {
        path: "/register",
        exact: true, 
        component: Register
    },
    {
        path: "/:slug",
        exact: true, 
        component: MoviePage 
    },
    {
        path: "lists/:slug",
        exact: true, 
        component: ListMovies 
    },
    {
        path: "category/:slug",
        exact: true, 
        component: ListMovies 
    },
    {
        path: "*",
        exact:false, 
        component: NotFound
    }
];
export default routes;