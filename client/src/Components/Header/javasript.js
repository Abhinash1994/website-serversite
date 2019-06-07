import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Introduction from '../Javascript/introduction'
class Javascript extends Component {
  render() {
    return (
         	<Grid container>
	        	<Grid item xs={2} sm={2} md={2} lg={2} className="leftside_info_javascript">		
	        			<h3 className="header"><u>Javascript</u></h3>
	        			<div className="topic">
	        				<h6>Tags</h6>
	        				<h6>Question</h6>
	        			</div>
	        	</Grid>
	        	<Grid item xs={8} sm={8} md={8}>
	        			<Introduction />
	        	</Grid> 	
        	</Grid>
    );
  }
}

export default Javascript;

