
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes,Route} from "react-router-dom";
import School from "./components/School/School";
import About from "./components/About/About";
import Sign from "./components/Sign/Sign"
import Home from "./components/Home/Home"
import Course from "./components/Course/Course";
import HomePage from "./components/Home/Home-page/Home-Page";
import Profile from "./components/Profile/Profile";
import Follow from "./components/Follow/Follow";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/School"} element={<School/>}/>
                <Route path={"/Course"} element={<Course/>}/>
                <Route path={"/About"} element={<About/>}/>
                <Route path={"/Sign"} element={<Sign/>}/>
                <Route path={"/Header"} element={<Header/>}/>
                <Route path={"/Footer"} element={<Footer/>}/>
                <Route path={"/Home"} element={<Home/>}/>
                <Route path={"/Profile"} element={<Profile/>}/>
                <Route path={"/Follow"} element={<Follow/>}/>
                <Route path={"/Home-Page"} element={<HomePage/>}/>

            </Routes>
        </div>
    );
}

export default App;
