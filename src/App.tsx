import { Route, Router, Switch } from 'wouter'
import ReactGA from 'react-ga4'
import Home from './pages/home'
import Faqs from './pages/faqs'
import OtrosMercados from './pages/inversiones/OtrosMercados'
import Inversiones from './pages/inversiones'
import Destacadas from './pages/destacadas'
import Terminos from './pages/terminos'
import Politica from './pages/politica'
import Error from './pages/error'
import Newsletter from './pages/contacto'
import Propiedades from './pages/propiedades'
import PropiedadesDetalles from './pages/propiedades/Detalles'
import ScrollToTop from './components/ScrollTop'

function App() {
  ReactGA.initialize('G-M0L817SPDB')

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route
          path='/'
          component={Home}
        />
        <Route
          path='/contacto'
          component={Home}
        />
        <Route
          path='/casos'
          component={Home}
        />
        <Route
          path='/guia'
          component={Home}
        />
        <Route
          path='/nosotros'
          component={Home}
        />
        <Route
          path='/renta-variable/:title/:id'
          component={Inversiones}
        />
        <Route
          path='/renta-variable/otros-mercados'
          component={OtrosMercados}
        />
        <Route
          path='/renta-fija/:title/:id'
          component={Inversiones}
        />
        <Route
          path='/inversiones-destacadas/:title/:id'
          component={Destacadas}
        />
        <Route
          path='/faqs'
          component={Faqs}
        />
        <Route
          path='/terminos-y-condiciones'
          component={Terminos}
        />
        <Route
          path='/politica-de-privacidad'
          component={Politica}
        />
        <Route
          path='/newsletter'
          component={Newsletter}
        />
        <Route
          path='/propiedades'
          component={Propiedades}
        />
        <Route
          path='/propiedades/miami'
          component={Propiedades}
        />
        <Route
          path='/propiedades/orlando'
          component={Propiedades}
        />
        <Route
          path='/propiedades/baltimore'
          component={Propiedades}
        />
        <Route
          path='/propiedades/:id/:title'
          component={PropiedadesDetalles}
        />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App
