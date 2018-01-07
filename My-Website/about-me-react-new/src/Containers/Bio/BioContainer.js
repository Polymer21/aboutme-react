import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BioContianer.css'

class BioContainer extends Component {
    state = {
        bioImage: 'bioImageHidden',
        bioNav: 'bioNavHidden',
        bioLayout: 'bioLayoutHidden',
    }


    componentWillMount() {
        setTimeout(
            function() {
                this.setState ({
                    bioImage: 'bio-image',
                    bioNav: 'bio-nav',
                    bioLayout: 'bio-layout',
                })
            }.bind(this), 500
        )
    }


    render() {
        return(
            <div className='bio-container'>
                <div className='bio-background'>
                </div>
                <div className={this.state.bioLayout}>
                    <img src='OtherFiles/josifimage.jpg' className={this.state.bioImage} /> 
                    <div className='bio-left'>   
                        <div className={this.state.bioNav}>
                            <Link to='/' className='bio-link'>
                                HOME
                            </Link>
                            
                            <Link to='/projects' className='bio-link'>
                                PROJECTS
                            </Link>
                            <Link to='/resume' className='bio-link'>
                                RESUME
                            </Link>
                        </div>
                        <div className='bio-main-stuff'>
                            <div className='name-content'>
                                <h1 className='bio-name'>
                                    Josif Raburn
                                </h1>
                                <h2 className='bio-content'>
                                I AM A 20 SOMETHING WEB DEVELOPER/DESIGNER.<br />
                                I HAVE A BEAUTIFUL WIFE AND 2 COOL DOGS.<br />
                                I LOVE VIDEO GAMES, MOVIES, AND LONG WALKS ON THE BEACH.
                                HIRE ME FOR A GOOD TIME.
                                </h2>
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>    
        )
    }
}

export default BioContainer;