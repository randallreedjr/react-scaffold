import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/App.jsx';

describe('<App>', () => {
  it('works', () => {
    const subject = shallow(<App />);
    expect(subject).toBeTruthy();
  })
})
