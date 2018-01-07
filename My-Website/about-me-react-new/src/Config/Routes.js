import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomeContainer from '../Containers/Home/HomeContainer'
import BioContainer from '../Containers/Bio/BioContainer'
import ProjectsContainer from '../Containers/ProjectsContainer'
import ResumeContainer from'../Containers/ResumeContainer'

class Routes extends Component {
    render() {
        return(
           <main>
                <Router>
                    <div>
                        <Route exact path='/' component={HomeContainer} />
                        <Route path='/bio' component={BioContainer} />
                        <Route path='/resume' component={ResumeContainer} />
                        <Route path='/projects' component={ProjectsContainer} />
                    </div>
               </Router>
           </main>
        )
    }
}

export default Routes;