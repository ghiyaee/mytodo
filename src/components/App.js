import React from "react";
import SearchBox from "./SearchBox";
import './App.css'
import UnSplash from "../api/UnSplash";
import Image from "./Images";
class App extends React.Component {
    state={images:[]}
   onSubmitHandel=async (trm) => {
      const respons= await  UnSplash.get('/search/photos', {
            params: { query: trm },
      })
        this.setState({images:respons.data.results})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBox onSubmite={this.onSubmitHandel} />
                <Image image={this.state.images }/>
            </div>
        )
    }
}
export default App;