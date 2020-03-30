import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Calendar extends React.Component {
    render() {
        return(
            <div>
                <title>Calendar</title>
		        <link href="themes/business.css" rel="stylesheet"/>
                <div id="calendar" style="position: absolute; width: 100%; height: 100%;"></div>	
                <script src="MindFusion.Scheduling.js" type="text/javascript"></script>
                <script src="Schedule.js" type="text/javascript"></script>
            </div>
        )
    }
}