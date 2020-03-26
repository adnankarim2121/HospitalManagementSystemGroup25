import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {

	setTimeout(() =>
	{
		props.history.push('/Patients')
	}, 2000);
	return(
		<ul>
			<li> <Link to="/"> Home </Link> </li>
			<li> <NavLink to="/Patients"> Patients </NavLink> </li>
		</ul>

		)
}

export default withRouter(Navbar)