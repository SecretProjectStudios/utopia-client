import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer as routing } from 'react-router-redux'
import MainMenu from './MainMenu/MainMenu'

const reducer = combineReducers({
  routing,
})
const middleware = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory)))
const store = createStore(reducer, middleware)
const history = syncHistoryWithStore(browserHistory, store)

const App = ({ children }) => {
  const styles = {
    container: {
      marginTop: '40px',
    },
  }
  return (
    <div style={styles.container}>
      <section>
        {children}
      </section>
    </div>
  )
}
const NewGame = () => <h1>hey</h1>

const JoinGame = ({ params }) => {
  return (
    <div>
      {params.reference}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/new" component={NewGame} />
        <Route path="/:reference" component={JoinGame} />
        <Route path="/" component={MainMenu} />
      </Route>
    </Router>
  </Provider>,
  global.document.getElementById('root'),
)
