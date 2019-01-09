import React from 'react';
import { shallow, configure } from 'enzyme';
import NewUser from './NewUser';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NewUser />', () => {
  it('renders an text input field', () => {
    const textinput = shallow(<NewUser />);
    expect(textinput.find('input').length).toEqual(1);
  });
});

