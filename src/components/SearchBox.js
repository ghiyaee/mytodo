import React, { Component } from "react";
import '../components/SearchBox.css'
class SearchBox extends React.Component{
    state={trm:''}
       onSubmit=(e)=> {
        e.preventDefault() 
        ///here is used this. method assignment Arro function
           this.props.onSubmite(this.state.trm)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field" >
                        < div className="ui massive label" >
                            Search Bar
                        </div>
                        < div className = "ui input" >
                           <input  type="text" value={this.state.value}
                                placeholder="Search for photos of anything you like"
                                style={{ fontSize: '30px', textAlign: 'center' }}
                                onChange={(e) => this.setState({ trm: e.target.value })} />
                         </div>
                    </div>
                    <h1>{this.state.trm}</h1>
                </form>
            </div>
        );
    };
};
export default SearchBox;