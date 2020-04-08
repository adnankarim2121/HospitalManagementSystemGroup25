import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'



class SetFeeBackend extends React.Component{

  state =
  {
    feeValue:
    {
      fee: '',
    }
  }

  setFee = _ => {
    const { feeValue } = this.state;
    localStorage.setItem("fee", feeValue.fee);
    alert(feeValue.fee);
  }

  render(){

    const { feeValue } = this.state;

    return(

      <div className="login">
        <form className="modal-content">

            <div className="imgcontainer">
              <img src={this.props.img} alt="Avatar" width='200' height='200'/>
            </div>

            <div className="credentials">
              <label for="uname"><b>Fee</b></label>
              <input
              type="text"
              placeholder="Enter Fee as a Number"
              value={feeValue.fee}
              onChange={e => this.setState({ feeValue: {...feeValue, fee: e.target.value}})}
              name="fee" required/>


              <button onClick={this.setFee} type="submit">Set Fee</button>
            </div>
        </form>
      </div>
    );
  }
}


export default SetFeeBackend;
