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
})
