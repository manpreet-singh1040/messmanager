
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Login from "./components/login";
import HomeNavBar from "./components/homePage/homeNavBar";
import Rollnoform from "./components/rollnoform";
import UploadPag from "./components/uploadPage/uploadPage";
import Checkb from "./components/checkb";


const App=()=> {
  /*constructor(props){
    super(props);
  }*/
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={
              <div style={{ height: `5000px` }}>
              <HomeNavBar />
              <NavBar />
              <Checkb/>
            </div>
            } />
            <Route
              path="/user"
              element={
                <div style={{ height: `5000px` }}>
                  <HomeNavBar />
                  <NavBar />
                  <Rollnoform />
                </div>
              }
            />
            <Route path="/uploadbill" element={
                <UploadPag/>
            } />
            <Route
              path="/login"
              element={
                <div style={{ display: `block`, height: `5000px` }}>
                  <NavBar />
                  <Login/>
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  
}
export default App;
