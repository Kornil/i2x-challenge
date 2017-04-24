/*import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../src/containers/App';

const mockStore = configureMockStore([thunk]);

describe('Container App', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it('should render the container component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.find(App).length).to.equal(1);
    const container = wrapper.find(App);
    // expect(container.find(App).length).to.equal(1);
  });
});
*/