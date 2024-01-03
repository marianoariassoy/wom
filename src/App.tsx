import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Faqs from './pages/faqs'
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
        path='/inversiones'
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
