import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Stories from '../pages/Stories';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';



const Page = () => {
    return ( 
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/stories" exact component={Stories} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact" exact component={Contact} />
        </Switch>
     );
}
 
export default Page;