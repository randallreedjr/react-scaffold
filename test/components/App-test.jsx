import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/components/App';
import HelloWorld from '../../src/components/HelloWorld';

describe('<App>', () => {
  it('renders the HelloWorldContainer component', () => {
    const subject = mount(<App />);
    expect(subject.find(HelloWorld).length).toEqual(1);
  });
});
