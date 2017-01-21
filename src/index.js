import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer as routing } from 'react-router-redux'
import MainMenu from './MainMenu'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'
import Lobby from './Lobby'
import Game from './Game'
import * as globalReducer from './reducer'

const reducer = combineReducers({
  routing,
  ...globalReducer,
})

const middleware = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory)))
const store = createStore(reducer, middleware)
const history = syncHistoryWithStore(browserHistory, store)

const App = ({ children }) => {
  const styles = {
    wrapper: {
      margin: '40px 40px',
    },
  }
  return (
    <div style={styles.wrapper}>
      {children}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/create" component={CreateGame} />
        <Route path="/join" component={JoinGame} />
        <Route path="/join/:reference" component={JoinGame} />
        <Route path="/lobby/:reference" component={Lobby} />
        <Route path="/game" component={Game} />
        <Route path="/" component={MainMenu} />
      </Route>
    </Router>
  </Provider>,
  global.document.getElementById('root'),
)
