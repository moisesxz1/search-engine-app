import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import ResultItem from './ResultItem';

describe('Tests on the <ResultItem /> Component', () => {
  test('It should render <ResultItem /> correctly', () => {
    const wrapper = shallow(<ResultItem name='Coffee' />);

    expect(wrapper).toMatchSnapshot();
  });

  // test('It should render the name prop correctly', () => {
  //   const name = 'Coffee';

  //   const wrapper = shallow(<ResultItem name={name} />);

  //   expect(wrapper.find('ForwardRef').length).toEqual(1);
  // });
});
