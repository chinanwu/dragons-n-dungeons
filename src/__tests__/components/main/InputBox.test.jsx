import { shallow } from 'enzyme';
import React from 'react';

import { InputBox } from '../../../components/main/InputBox.jsx';

jest.unmock('../../../components/main/InputBox.jsx');

describe('InputBox component', () => {
  describe('rendering', () => {
    it('renders InputBox', () => {
      const wrapper = shallow(<InputBox id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('calls onChange when input text', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<InputBox id="test" onChange={onChange} />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#test').simulate('change');
      expect(onChange).toHaveBeenCalled();
    });
  });
});
