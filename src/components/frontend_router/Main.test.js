import React from 'react';
import Game from './Game';
import Home from './Home';
import Rules from './Rules';
import Main from './Main';
import { shallow } from "enzyme";


describe("Game", () => {
  let wrapper

  beforeEach (() => {
    wrapper=shallow(<Game/>);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

})

describe("Mounted MonopolyBox", () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(<MonopolyBox />);
  });

  it("should roll dice when Roll Dice button is clicked", () => {
  const spy = jest.spyOn(wrapper.instance(), "handleCommentDelete");
  wrapper.instance().forceUpdate();
  wrapper.find("#delete-button").simulate("submit");
  expect(spy).toHaveBeenCalledTimes(1);
});


});
