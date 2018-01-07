import React, { Component } from 'react';
import { string } from 'prop-types';
import '../ProjectsSkeleton.css'


class ProjectsSkeleton extends Component {
    static propTypes = {
        projectName: string.isRequired,
        info: string.isRequired,
    }

    render() {
        return(
            <div>
                <h1 className='project-skeleton'>
                    {this.props.projectName}
                </h1>
                <p>
                    {this.props.info}
                </p>
            </div>
        )
    }
}

export default ProjectsSkeleton;