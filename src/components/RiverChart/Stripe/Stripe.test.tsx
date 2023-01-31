import ReactDOM from 'react-dom';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stripe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
