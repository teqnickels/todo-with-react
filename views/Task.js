//all the different things you need for state
const Task = React.createClass({
  render: () => {
    return (
      <div>
        <p>HELLO RITA</p>
      </div>
    )
  }
})

// this will render the const Task in the root div in our index.html file
ReactDOM.render(
  <Task />, document.getElementById('root')
)
