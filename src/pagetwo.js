import React, { Component } from 'react';

class PageTwo extends Component {
    render(){
        //console.log(this.props);
        const { name, age, course} = this.props;
        return(
            <div className="page">
                <div>Name: {name}</div>
        <div>Age:{age}</div>
                <div>Course: {course}</div>
            </div>
        )
    }
}

export default PageTwo