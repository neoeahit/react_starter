// modules/Repo.js
import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {
           incident: '',
           ticket: '',
           severity: '',
           coordinator: '',
           investigator: '',  
	   communicator: '',
           phase: ''
        }
  },
  componentDidMount: function(){
    fetch('/test')  
    .then((response) => {
      return response.json()
    })
    .then((data) =>  {
      this.setState(data);
      console.log(data)
    });
  },
  render: function(){
      return (
        <div>
	<h2>Incident Details</h2>
	<dl>
	  <dt>Incident</dt>
	  <dd>{this.state.incident}</dd>
	  <dt>Ticket</dt>
	  <dd>{this.state.ticket}</dd>
	  <dt>Severity</dt>
	  <dd>{this.state.severity}</dd>
	  <dt>Coordinator</dt>
	  <dd>{this.state.coordinator}</dd>
	  <dt>Investigator</dt>
	  <dd>{this.state.investigator}</dd>
	  <dt>Communicator</dt>
	  <dd>{this.state.communicator}</dd>
	  <dt>Phase</dt>
	  <dd>{this.state.phase}</dd>
	</dl>
	</div>
      )
  }	
})
