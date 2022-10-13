import Barcode from 'react-barcode';
import logo from '../assets/logo.png';
import './MemberForm.css';

const MemberForm = ({value}) => {
    return (
        <div className='form'>
            <div className='header'>
                <img src={logo} alt='cedar beauty supply logo' className='logo' />
                <div className='title'>
                    <h3>CEDAR BEAUTY SUPPLY</h3>
                    <h4>REWARDS MEMBERSHIP</h4>
                </div>
                <div className='barcode'>
                    <Barcode
                        width={.8}
                        height={40}
                        fontSize={7}
                        value={"CEDAR_"+value}
                    />
                </div>
            </div>
            <div className='allInputs'>
                <div className='input'>
                    <p>DATE:</p>
                    <div className='lineShort'></div>
                </div>
                <div className='input'>
                    <p>NAME:<span className='required'>*</span></p>
                    <div className='line'></div>
                </div>
                <div className='input'>
                    <p>PHONE:<span className='required'>*</span></p>
                    <div className='line'></div>
                </div>
                <div className='input'>
                    <p>EMAIL:</p>
                    <div className='line'></div>
                </div>
            </div>
            <div className='footer'>
                {/* <input type='checkbox' id='email' name='email' value='yes' />
                <label for='email' className='emailLabel'>Yes, I would like to receive sale event emails</label> */}
                <p className='please'>( PLEASE PRINT )</p>
            </div>
        </div>
    );
};

export default MemberForm;