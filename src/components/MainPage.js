import React, { Component } from 'react';

import CounterButton from  '../components/CounterButton';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        const { robots, searchField } = this.props;
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    }

    render() {
        const { robots, onSearchChange, isPending } = this.props;
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CounterButton color='blue' />
            <Scroll>
            { isPending ? <h1>Loading</h1> :
                <ErrorBoundry>
                <CardList robots={this.filterRobots()} />
                </ErrorBoundry>
            }
            </Scroll>
        </div>
        );
    }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default MainPage
