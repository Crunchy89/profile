import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui/dist/js/coreui.min";
import "@coreui/icons/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import Contact from "./pages/kontak/Contact";
import Tentang from "./pages/tentang/Tentang";

function App() {
  return (
    <>
      <div className="c-app">
        <Sidebar />
        <div className="c-wrapper bg-dark">
          <Header />
          <div className="c-body">
            <main className="c-main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/kontak" component={Contact} />
                <Route path="/tentang" component={Tentang} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
      </>
  );
}

export default App;
