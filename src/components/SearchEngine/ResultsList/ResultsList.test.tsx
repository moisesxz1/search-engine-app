import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import ResultsList from './ResultsList';

describe('Tests on the ResultsList /> Component', () => {
  test('It should render <ResultsList /> correctly', () => {
    const wrapper = shallow(
      <ResultsList
        title='Google Results'
        results={[
          'Cereal & Granola - Walmart.com',
          'Cereal - Wikipedia',
          'How to Choose a Breakfast Cereal - Verywell Fit',
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('It should render the title prop  correctly', () => {
    const title = 'Google Results';

    const wrapper = shallow(
      <ResultsList
        title={title}
        results={[
          'Cereal & Granola - Walmart.com',
          'Cereal - Wikipedia',
          'How to Choose a Breakfast Cereal - Verywell Fit',
        ]}
      />
    );

    const titleProp = wrapper.find('h2').text();

    expect(titleProp).toBe(title);
  });

  test('It should render the results prop  correctly', () => {
    const title = 'Google Results';
    const results = [
      'Cereal & Granola - Walmart.com',
      'Cereal - Wikipedia',
      'How to Choose a Breakfast Cereal - Verywell Fit',
    ];

    const wrapper = shallow(<ResultsList title={title} results={results} />);

    expect(wrapper.find('ResultItem').length).toBe(results.length);
  });
});
