import React, { Component } from "react";
class SearchBox extends React.Component{
    state={trm:'',id:0}
    // onInPutHandel(e) {
    //   this.setState(e.target.value);
    // }
    onSubmit=(e)=> {
        e.preventDefault() 
        ///here is used this. method asin => 
        this.props.onSubmite(this.state.trm)
    }
    render() {
        return (
            <div className="ui segment">
               
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field" >
                        <label style={{ fontSize:'30px'}}>Search Bar</label>
                        <input type="text" value={this.state.value}
                            placeholder = "Search for photos of anything you like"
                            style={{fontSize:'30px' ,textAlign:'center'}}
                            onChange={(e) => this.setState({ trm: e.target.value })} />
                    </div>
                    <h1>{this.state.trm }</h1>
               </form>
            </div>
        )
    }
}
export default SearchBox;