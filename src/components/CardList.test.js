import { shallow } from "enzyme";
import React from 'react';
import CardList from './CardList';

it('expect to render card list component', () => {
    const mockRobots = [{
        id: 1, 
        name: "john",
        userName: "Johnnie",
        email: "john@gmail.com"
    }]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})