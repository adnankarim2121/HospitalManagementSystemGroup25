/*
Tests were created using this guide: https://jestjs.io/docs/en/tutorial-react
and these examples: https://github.com/facebook/jest/tree/master/examples/react
*/



import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('Link changes when clicking sidebarcomponent', () => {
    const tree = renderer
    .create(<Link page='/'></Link>),
});
let tree = component.toJSON();
expect(tree).toMatchSnapshot();



export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isChecked: false};
    }
  
    onChange = () => {
      this.setState({isChecked: !this.state.isChecked});
    };
  
    render() {
      return (
        <label ref={this.props.labelRef}>
          <input
            ref={this.props.inputRef}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        </label>
      );
    }
  }

  it('renders correctly', () => {
    const tree = renderer.create(<Clock />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  jest.mock('../fetchCurrentUser.js');

it('displays a user after a click', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';
