import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state={
        text : ''
    };

    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        userstate : PropTypes.bool.isRequired
    }

    onSubmit = e =>{
        e.preventDefault();
        if(this.state.text !== '')
        {
        this.props.searchUsers(this.state.text);
        this.setState({text : ''});
        this.props.setAlert(false);
        }else{
        this.props.setAlert(true);
        }
    }

    onChange= e =>{
        this.setState({ [e.target.name] : e.target.value});
    };

    render() {

        const {clearUsers, userstate} = this.props;

        return (
            <div>
               <form onSubmit={this.onSubmit} className="type">
                
               <input type="text" name = "text"  placeholder="Search User..." value = {this.state.text} onChange={this.onChange} />    
               <input type="submit" value ="Submit" className="btn btn-dark btn-block"/>   
               </form> 
            {
             userstate && (
             <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
             )
            }
            </div>
        )
    }
}

export default Search