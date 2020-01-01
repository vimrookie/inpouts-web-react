import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import './scss/components/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/404" component={NotFound} /> */}
                    {/* <Redirect from="*" to="/404" /> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
