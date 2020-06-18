import { shallow } from "enzyme";
import React from 'react';
import CounterButton from './CounterButton';

describe('Counter Button', () => {

    
    it('expect to render counter component', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />)
        expect(wrapper).toMatchSnapshot();
    })
    
    it('correctly increments the counter', ()=> {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />)
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 1})
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 2})
        wrapper.find('[id="counter"]').simulate('keypress');
        expect(wrapper.state()).toEqual({count: 2});
        expect(wrapper.props().color).toEqual('red')
    })
})