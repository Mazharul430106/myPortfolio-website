import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetailsOne from "../../Pages/Home/Projects/ProjectDetailsOne";
import ProjectDetailsThree from "../../Pages/Home/Projects/ProjectDetailsThree";
import ProjectDetailsTwo from "../../Pages/Home/Projects/ProjectDetailsTwo";
import Project from "../../Pages/Home/Projects/Projects";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home> 
            },
            {
                path: '/home',
                element: <Home></Home> 
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/project',
                element: <Project></Project>
            }, 
            {
                path: '/projectDetailsOne',
                element: <ProjectDetailsOne></ProjectDetailsOne>
            },
            {
                path: '/projectDetailsTwo',
                element: <ProjectDetailsTwo></ProjectDetailsTwo>
            },
            {
                path: '/projectDetailsThree',
                element: <ProjectDetailsThree></ProjectDetailsThree>
            }
            
        ]
    }
])
