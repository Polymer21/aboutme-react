import React, { Component } from 'react';
import './HomeContainer.css'
import { Link } from 'react-router-dom';

class HomeContainer extends Component {
    state = {
        homeContainer: 'homeContainerHidden',
    }

    componentWillMount() {
        setTimeout(
            function() {
                this.setState ({
                    homeContainer: 'home-container',
                })
            }.bind(this), 500
        )
    }

    render() {
        return(
            <div className='home-main'>     
                <div className={this.state.homeContainer}>
                    <div className='home-main'>
                    </div>
                        <video autoPlay muted loop id='myVideo'>
                            <source src='OtherFiles/myvid.mp4' />
                        </video>

                        <div className='home-content'>
                            <Link to='/bio' className='link'>
                            BIO
                            </Link>
                            <Link to='/projects' className='link'>
                            PROJECTS
                            </Link>
                            <Link to='/resume' className='link'>
                            RESUME
                            </Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;

