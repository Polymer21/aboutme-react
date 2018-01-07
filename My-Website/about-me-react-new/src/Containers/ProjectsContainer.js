import React, { Component } from 'react';
import ProjectsSkeleton from '../Components/ProjectsSkeleton'
import './ProjectsContainer.css'

class ProjectsContainer extends Component{
    render() {
        return(
            <div className='projects-main'>
                <div className='project1-container'>
                    <img src='OtherFiles/josifimage.jpg' className='project1-img'/>
                    <div className='project1-background'>
                    </div>
                    <div className='projects-content1'>
                        <ProjectsSkeleton projectName='Portfolio Site' info='This is info about my project'  />
                    </div>
                </div>
                <div className='project2-container'>
                    <img src='OtherFiles/josifandeverrete.jpg' className='project2-img' />
                    <div className='project2-background'>
                    </div>
                    <div className='projects-content2'>
                        <ProjectsSkeleton projectName='About Me Using React' info='This is other info about my project' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer;