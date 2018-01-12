import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import App from './App.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe("Not another Counter app", () => {
    const wrapper = shallow(<App />);
    it("Should it render", () => {
        expect(wrapper).toBeDefined();
    })

    it("Should it have two buttons and a label", () => {
        expect(wrapper.find(".button").length).toEqual(2);
        expect(wrapper.find(".value").length).toEqual(1);
    })

    it("Starting value should be zero", () => {
        expect(wrapper.find(".value").text()).toEqual("0");
    })

    it("Counter should increase value if + is clicked", () => {
        wrapper.find("[id='+']").simulate("click");
        expect(wrapper.find(".value").text()).toEqual("1")
    })
})  