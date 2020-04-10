import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoCancel from '../icons/cancel.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 50

  },
  title: {
    fontFamily: 'Muli',
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#A4A6B3',
    marginLeft: 16
  },

  padding: {
    padding: 20
  }
});

class SetFeeBackend extends React.Component {

  state =
    {
      feeValue:
      {
        fee: '',
      }
    }

  setFee = _ => {
    const { feeValue } = this.state;

    var response = window.confirm(`Are you sure you want to set the fee value at $${feeValue.fee}?` );
    if(response == true)
    {
      localStorage.setItem("fee", feeValue.fee);
      window.location.href = 'http://localhost:3000/SetFee';
    }
  }

  render() {

    const { feeValue } = this.state;

    return (
      <Column className={css(styles.container)}>
        <div className={css(styles.title)}>{"Set the cancellation fee for appointments cancelled by patients"}</div>
        <div className={css(styles.padding)}></div>
        <div className="login">
          <form className="modal-content">
            <div className="imgcontainer">
              <img src={LogoCancel} alt="Avatar" width='130' height='130' />
            </div>
            <div className={css(styles.padding)}></div>
            <div className="credentials">
              <label for="uname"><b>Fee($)</b></label>
              <input
                type="text"
                placeholder="Enter Fee as a Number"
                value={feeValue.fee}
                onChange={e => this.setState({ feeValue: { ...feeValue, fee: e.target.value } })}
                name="fee" required />
              <button onClick={this.setFee} type="submit">Set Fee</button>
            </div>
          </form>
        </div>
      </Column>
    );
  }
}


export default SetFeeBackend;
