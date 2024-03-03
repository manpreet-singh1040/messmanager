import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Login from "./components/login";
import HomeNavBar from "./components/homePage/homeNavBar";
import Rollnoform from "./components/rollnoform";
class App extends Component {
  /*constructor(props){
    super(props);
  }*/

  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={
              <div>
                <NavBar />
                <h1>homepage</h1>
              </div>
            } />
            <Route
              path="/user/:userName"
              element={
                <div style={{ height: `5000px` }}>
                  <HomeNavBar />
                  <NavBar />
                  <Rollnoform />
                </div>
              }
            />

            <Route path="/about" element={<h1>about</h1>} />
            <Route
              path="/login"
              element={
                <div style={{ display: `inline-block`, height: `5000px` }}>
                  <NavBar />
                  <Login />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
