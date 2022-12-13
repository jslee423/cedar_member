import { useSelector } from "react-redux"
import MemberForm from "../components/MemberForm";
import './Forms.css';

const Forms = () => {
    let lastNumber = useSelector((state) => state.counter.lastNumber);
    const numberOfPages = useSelector((state) => state.counter.numberOfPages);
    const formsPerPage = 6;
    const allForms = [];
    let barCodeNums = [];

    const getBarCodes = () => {
        const memberForms = [];
        for (let j = 1; j <= formsPerPage; j++) {
            barCodeNums.push(+lastNumber + j);
        }

        for (let i = 0; i < barCodeNums.length; i++) {
            memberForms.push(<MemberForm value={barCodeNums[i]} key={barCodeNums[i]} />)
        }

        return (
            memberForms
        )
    }

    const resetNums = () => {
        lastNumber = barCodeNums[barCodeNums.length-1];
        barCodeNums = [];
    }

    const renderForms = () => {
        for (let i = 1; i <= numberOfPages; i++) {
            if (i < numberOfPages) {
                allForms.push(
                    <div className='signUpForms page-break'>
                        {getBarCodes()}
                    </div>
                )
            } else {
                allForms.push(
                    <div className='signUpForms'>
                        {getBarCodes()}
                    </div>
                )
            }
            resetNums()
        }

        return (
            allForms
        )
    };

    return (
        <>
            {renderForms()}
        </>
    );
}

export default Forms;