import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Faqs from './pages/faqs'
import OtrosMercados from './pages/inversiones/OtrosMercados'
import Inversiones from './pages/inversiones'
import Error from './pages/error'

function App() {
  return (
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
        path='/faqs'
        component={Faqs}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
