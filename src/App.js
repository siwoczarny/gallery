import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layouts/Header";
import Page from "./components/layouts/Page";
import Footer from "./components/layouts/Footer";


function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <main className="page">
              {<Page />}
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
  );
}

export default App;