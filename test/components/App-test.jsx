import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/App';

describe('<App>', () => {
  it('works', () => {
    const subject = shallow(<App />);
    expect(subject).toBeTruthy();
  });
});
