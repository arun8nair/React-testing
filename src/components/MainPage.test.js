import { shallow } from "enzyme";
import React from 'react';
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders main page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        searchField: 'A',
        robots: [{
            id: 3,
            name: 'Aaron',
            email: 'aaron@gmail.com'
        }],
        isPending: false,
        onRequestRobots: jest.fn()
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper.instance().filterRobots()).toEqual([]);  // empty data 
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'Aaron',
        email: 'aaron@gmail.com'
    }]);    //success data
})

it('filters robots correctly2', () => {
    const mockProps2 = {
        searchField: 'Zeke',
        robots: [{
            id: 3,
            name: 'Aaron',
            email: 'aaron@gmail.com'
        }],
        isPending: false,
        onRequestRobots: jest.fn()
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual([]); //failure data
    // corrupt data
})