// TODO

class GroceryList extends React.Component {

  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        <ul>
       {['Bananas', 'Chocolate'].map(item => <GroceryItem item={item} />)}
        </ul>
      </div>

    );
  }

};

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: false};

    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({
      done: !state.done
    }))
  }

  handleOnMouseEnter(e) {
    e.target.style.fontWeight = 'bold';
  }

  handleOnMouseOut(e) {
    e.target.style.fontWeight = '';
  }

  render() {

    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none'};

      return (
        <li style={style} onClick={this.handleClick} onMouseEnter={this.handleOnMouseEnter} onMouseOut={this.handleOnMouseOut}>{this.props.item}
        </li>
      );
  }
}


ReactDOM.render(<GroceryList />, document.getElementById('app'));