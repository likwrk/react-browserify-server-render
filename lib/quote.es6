import React from "react";
export default class Quote extends React.Component {

  // We initialise its state by using the `props` that were passed in when it
  // was first rendered. We also want the button to be disabled until the
  // component has fully mounted on the DOM
  constructor(props) {
    super(props);
    let data1 = {d: 1};
    let data = Object.assign({}, data1);
    this.state = {
      items: [],
      disabled: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Once the component has been mounted, we can enable the button
  componentDidMount() {
    this.setState({disabled: false})
  }

  // Then we just update the state whenever its clicked by adding a new item to
  // the list - but you could imagine this being updated with the results of
  // AJAX calls, etc
  handleClick() {
    this.setState({
      items: [...this.state.items, 'Item']
    })
  }

  render() {
    let items = this.state.items;
    return(
      <div>
        <button onClick={this.handleClick} disabled={this.disabled}>Add item!!!</button>
        <ul>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    )
  }
}