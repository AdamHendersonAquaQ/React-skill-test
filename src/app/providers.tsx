import { Provider } from 'react-redux';
import { store } from './store';
import { App } from '../App';

export function Providers() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
