import React from 'react';
import {Router,Route, Switch} from 'react-router-dom'
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
            <div>
                <Header />
                <Switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/:id" exact component={StreamShow}/>
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                </Switch>
            </div>
            </Router>
        </div>
    );
}

export default App;

//469834375340-0pi6refn1o7aeq25aj65a5d778qtpudq.apps.googleusercontent.com
//0k0_DfXhEMil51GPHso3VDB-