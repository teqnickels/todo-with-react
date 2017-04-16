import React from 'react'
import {render} from 'react-dom'

class Task extends React.Component {
  render() {
    return <p>Hello React Stupidest Component!</p>
  }
}

render(<Task/>, document.getElementById('app'))
