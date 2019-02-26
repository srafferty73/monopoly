import React from 'react';
import Game from './Game';
import Home from './Home';
import Rules from './Rules';
import Main from './Main';
import DiceRoll from '../DiceRoll';
import MonopolyBox from '../../containers/MonopolyBox'
import { shallow, mount } from "enzyme";


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
    wrapper = mount(<MonopolyBox/>);
    wrapper.setState= {
   properties: [{
   position: 1,
   name: "Old Kent Road",
   color: "Brown",
   price: 60,
   rent_status: 0,
   owner: "",
   rent: [2,4,10,30,90,160,250],
   other_properties: [3],
   row: 1
  }],
    players: {
      id: 1,
      name: "Bill",
      money: 1500,
      current_position: 0,
      status: "end",
      icon: "fas fa-car-side"
    },
    game: {
    current_player: 0,
    current_roll1: null,
    current_roll2: null,
    double_counter: 0}
  }
  });

  it("should receive a click when Roll Dice button is clicked", () => {
  const spy = jest.spyOn(wrapper.instance(), playerMove);
  wrapper.instance().forceUpdate();
  wrapper.find("#dice-roll").simulate("click");
  expect(spy).toHaveBeenCalledTimes(1);
});


});
