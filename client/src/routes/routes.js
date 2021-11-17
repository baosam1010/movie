import Main from "../components/main/Main";
import ListMovies from "../pages/ListMovies";
import MoviesPage from "../pages/MoviePage";
import NotFound from "../pages/NotFound";

const routes = [
    {
        path: "/",
        exact: true, 
        component: Main
    },
    {
        path: "/:slug",
        exact: true, 
        component:MoviesPage 
    },
    {
        path: "category/:slug",
        exact: true, 
        component:ListMovies 
    },
    {
        path: "*",
        exact:false, 
        component:NotFound
    }
];
export default routes;