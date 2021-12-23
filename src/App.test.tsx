import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('Tests on the App />Component', () => {
  test('It should render <App /> correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
