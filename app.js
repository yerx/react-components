// TODO

var GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList groceryItems={['Bananas', 'Chocolate']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));