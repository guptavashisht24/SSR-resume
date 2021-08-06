import React, { Component } from 'react'
import routes from './routes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import My404component from './My404component';

class App extends Component {
    render() {
        return (

                <Router>
                <Switch>
                    {routes.map(({ path, exact, component: C, ...rest }) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => (
                                <C {...props} {...rest} />
                            )}
                        />
                    ))}
                    <Route path='*' component={My404component} />
                </Switch>
                </Router>


        )
    }
}

export default App