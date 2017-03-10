// modules/Repo.js
import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {
           incident: 'Kafka is down in uswest1-prod',
           ticket: 'KAFKA-1022',
           severity: 'P0',
           coordinator: 'XYZ',
           investigator: 'ABC',  
	   communicator: 'XYZ',
           phase: 'active'
        }
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
