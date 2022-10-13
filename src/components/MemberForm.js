import Barcode from 'react-barcode';
import './MemberForm.css';

const MemberForm = ({value}) => {
    return (
        <div className='form'>
            <div className='header'>
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
                    <p>NAME:</p>
                    <div className='line'></div>
                </div>
                <div className='input'>
                    <p>PHONE:</p>
                    <div className='line'></div>
                </div>
                <div className='input'>
                    <p>EMAIL:</p>
                    <div className='line'></div>
                </div>
            </div>
            <p className='please'>( PLEASE PRINT )</p>
        </div>
    );
};

export default MemberForm;