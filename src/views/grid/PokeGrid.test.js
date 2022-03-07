import React from "react";
import { screen, render, fireEvent, toBe } from "@testing-library/react";
import PokeGrid from './PokeGrid'

import { shallow, configure } from 'enzyme';
import { Button } from "../../components/styled_components/styled";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()})
describe('PokeGrid',()=>{
    it('must render',()=>{
        render(<PokeGrid/>)
        expect(screen.getByText(/prev/i)).toBeInTheDocument();
    })

    it('should search pokemon', ()=>{
        render(<PokeGrid/>)
        const inputEl = screen.getByPlaceholderText('Search Pokemon')
        fireEvent.change(inputEl,{target:{value: 'bulbasaur'}})

        screen.debug()
    })

    it('should filter pokemon', ()=>{
        render(<PokeGrid/>)
        const filter = screen.getByTestId('select')

        fireEvent.change(filter, {
             target: { value: "favorites" },
        });

        screen.debug()
    })

    it('Test click event', () => {
        const mockCallBack = jest.fn();
    
        const button = shallow((<Button onClick={mockCallBack}>Like</Button>));
        const button_a = shallow((<Button onClick={mockCallBack}>Next</Button>));
        const button_b = shallow((<Button onClick={mockCallBack}>Prev</Button>));
        button.find('button').simulate('click');
        button_a.find('button').simulate('click');
        button_b.find('button').simulate('click');

        expect(mockCallBack.mock.calls.length).toEqual(3);
      });



})