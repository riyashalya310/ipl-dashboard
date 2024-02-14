import {Redirect, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
