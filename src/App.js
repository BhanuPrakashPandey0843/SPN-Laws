import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomeSections/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ELearning from './Components/ELearning/ELearning';
import Blog from './Components/Blog/Blog';
import Testimonial from './Testimonial';
import About from './Components/About'
import ContactUs from './Components/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/> <Home /> <Footer/></>,
    },
    {
      path: "/learning",
      element: <><Navbar/><ELearning/><Footer/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footer/></>,
    },
    {
      path: "/blog",
      element:<><Navbar/><Blog /><Footer/></> ,
    },
    {
      path:"/testimonials",
      element:<><Navbar/><Testimonial/><Footer/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><ContactUs/><Footer/></>
    },
    {
      path:"/blogs",
      element:<><Navbar/><Blog className="pb-6" /> {/* Reduced bottom padding */}

<Footer/></>
    }
  ]);

  return (
    <>
  
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
