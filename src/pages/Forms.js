import { useSelector } from "react-redux"
import MemberForm from "../components/MemberForm";
import './Forms.css';

const Forms = () => {
    const lastNumber = useSelector((state) => state.counter.lastNumber);
    const numberOfPages = useSelector((state) => state.counter.numberOfPages);

    // const numOfPages = 10;
    const totalRows = numberOfPages * 3;
    const totalForms = totalRows * 2;
    const barcodeNums = [];

    for (let i = 0; i < totalForms; i++) {
        barcodeNums.push(Number(lastNumber)+(i+1));
    } 

    return (
        <div className='signUpForms'>
            {barcodeNums.map((num) => {
                return <MemberForm value={num} key={num} />
            })}
        </div>
    )
}

export default Forms