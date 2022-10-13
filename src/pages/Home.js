import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLastNumber, setNumberOfPages } from '../redux/counterSlice';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        dispatch(setLastNumber(e.target[0].value));
        dispatch(setNumberOfPages(e.target[1].value));

        navigate('/forms');
    }

    return (
        <div className='home'>
            <h1 className='homeTitle'>CEDAR BEAUTY</h1>
            <h1 className='homeTitle homeTitle2'>REWARD MEMBERSHIP FORMS</h1>
            <form className='homeForm' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label htmlFor="lastNum">LAST NUMBER:</label>
                    <input type="number" id="lastNum" name="lastNum" />
                </div>
                <div className='inputs'>
                    <label htmlFor="numPages">NUMBER OF PAGES:</label>
                    <input type="number" id="numPages" name="numPages" />
                </div>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Home;