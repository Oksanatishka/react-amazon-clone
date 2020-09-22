import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
    // data layer
    // get the 'user' in the state
    const [{ user }, dispatch] = useStateValue();

    // useEffect hook <<<<<<<<<< POWERFUL
    // Piece of code that runs based on a given condition
    useEffect(() => {
        // create a listener which is going to be listening all the time to if the user signed in or signed out
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // the user is logged in ...
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // the user is logged out ...
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
        return () => {
            // Any cleanup operations go in here...
            unsubscribe();
        };
    }, []);

    // Login page -> open Console -> you'll see 'USER IS >>>> null' -> enter user, create account -> you'll see 'USER IS >>>> P {...}' and redirect to home page -> after refresh user is still logged in!!
    console.log('USER IS >>>>', user);

    return (
        <Router>
            <div className="app">
                {/* <h1>Amazon Clone</h1> */}
                <Switch>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                        {/* <h1>Checkout</h1> */}
                    </Route>
                    <Route path="/login">
                        {/* <h1>Login page</h1> */}
                        <Login />
                    </Route>
                    {/* default route */}
                    <Route path="/">
                        <Header />
                        <Home />
                        {/* <h1>Home page</h1> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
