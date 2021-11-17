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

const showRoutes = (routes) => {
  let result = null;
  result = routes.map((route) => {
    const { path, exact, component: Component } = route;
    return (<Route
      key={Component}
      path={path}
      exact={exact}
      element={<Component />}
    />)
  })
  return result;
}
function App() {
  return (
    <div className="">
      <Header />
      <div className="mt-5 mb-5">
        <Container >
          <Routes >
            {showRoutes(routes)}
          </Routes>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
