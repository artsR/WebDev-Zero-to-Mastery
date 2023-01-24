import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import './app.css';

// const state = {
//     images: images,
//     searchField: ''
// }
const images = [1, 2, 3, 4, 5]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            images: images,
            searchField: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className='tc'>
                <h1>Midjourney most recent interesting arts</h1>
                <p>arts generated by Ai from scratch</p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList midjourneyImages={this.state.images} />
            </div>
        );
    }
}

export default App;
