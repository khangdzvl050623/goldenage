import "./App.css";
import "./styles/images.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GoldPriceTable from "./GoldPriceTable";
import ExchangeRateTable from "./ExchangeRateTable";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';  // hoặc App.css
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null);
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({ email: payload.sub, role: payload.role });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Gallery data={landingPageData.Gallery} />
              <Testimonials data={landingPageData.Testimonials} />
              <Team data={landingPageData.Team} />
              <div id="exchange-rate" className="text-center">
                <div className="container">
                  <div className="section-title">
                    <h2>Tỷ Giá Ngoại Tệ</h2>
                    <h1>haha</h1>
                  </div>
                  <ExchangeRateTable />
                </div>
              </div>
              <div id="gold-price" className="text-center">
                <div className="container">
                  <div className="section-title">
                    <h2>Giá Vàng</h2>
                  </div>
                  <GoldPriceTable />
                </div>
              </div>
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage setUser={setUser} />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}
