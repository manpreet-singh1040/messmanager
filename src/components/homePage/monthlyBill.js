import { useState } from 'react'
import './monthlyBill.css'
import MonthlyBillDetail from './monthlyBillDetail';
const MonthlyBill=(props)=>{
    let months=['Nil','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const[moreD,setMoreD]=useState(false);
    const moreDetail=()=>{
        console.log(`hey got ya call ${moreD}`);
        if(moreD)
        {
            console.log(`working on it???`);
            return(<MonthlyBillDetail setMoreD={setMoreD} month={months[props.month]} nod={props.nod} diet={props.diet} bda={props.bda} extra={props.extra} guest={props.guest} total={props.total} ba={`17500`}/>)
        }
    }
    const handleMoreD=()=>{
        if(!moreD)
        {
            setMoreD(true);
        }
    }
    return(
        <div className='faq5'>
            <div className="A"><b>MONTH AND YEAR:</b><br></br>{`${months[props.month]}`}</div>
            <hr></hr>
            <div className="A"><b>MONTHLY BILL:</b><br></br>{`${props.total}`}</div>
            <hr></hr>
            <div className="A"><b>BALANCE AMOUNT:</b><br></br>{`${props.ba}`}</div>
            <button className='Ab' onClick={handleMoreD}>More Detail</button>
            {
                moreDetail()
            }
        </div>
    )
}
export default MonthlyBill