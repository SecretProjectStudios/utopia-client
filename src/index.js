import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer as routing } from 'react-router-redux'
import { Segment } from 'semantic-ui-react'
import { MainMenu } from './MainMenu'
import { JoinGame, reducer as joinGameReducer } from './JoinGame'
import { Lobby, reducer as lobbyReducer } from './Lobby'
import { CreateGame } from './CreateGame'

const reducer = combineReducers({
  routing,
  joinGameReducer,
  lobbyReducer,
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
      <Segment>
        {children}
      </Segment>
    </div>
  )
}
const NewGame = () => <h1>hey</h1>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/new" component={NewGame} />
        <Route path="/join" component={JoinGame} />
        <Route path="/join/:reference" component={JoinGame} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/create" component={CreateGame} />
        <Route path="/" component={MainMenu} />
      </Route>
    </Router>
  </Provider>,
  global.document.getElementById('root'),
)
