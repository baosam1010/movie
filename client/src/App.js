import './css/App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import Main from './components/main/Main';
import Container from 'react-bootstrap/esm/Container';
import {
  Routes,
  Route,


} from "react-router-dom";
import routes from './routes/routes';
import { useState } from 'react';
import LoadingItem from './components/loadingItem/LoadingItem';
import './scss/css/custom.css';


const showRoutes = (routes, loading, setLoading, handleLoading) => {
  let result = null;
  result = routes.map((route) => {
    const { path, exact, component: Component } = route;
    // console.log("loading:", loading)
    return (<Route
      key={Component}
      path={path}
      exact={exact}
      element={
        <Component
          loading={loading}
          setLoading={setLoading}
        />
      }
    />)
  })
  return result;
};

function App(props) {
  const [loading, setLoading] = useState(false);

  
  
  return (
    <div className="bg-secondary">
      <Header />
      <div className="mt-5 mb-5">
        <Container >
          <Routes >

            {showRoutes(routes, loading, setLoading, )}

          </Routes>
        </Container>

      </div>
      <Footer />
      {loading ? <LoadingItem /> : null}
    </div>
  );
}

export default (App);
