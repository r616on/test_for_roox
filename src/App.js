import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store-toolkit/store";
import Index from "./pages/Index/Index";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/users/:id" element={<ProfileUserPage />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
