import "./monthlyBillDetails.css";

const MonthlyBillDetail=(props)=>{
    const lessD=(event)=>{
        console.log(event.target)
        console.log(event.target.className==="faq1"|| event.target.className==="faq4");
        if(event.target.className==="faq1"|| event.target.className==="faq4")
        {

            props.setMoreD(false);
        }
    }
    console.log(`inside monthlybill details`);
    return(
        <div className="faq1" onClick={lessD}>
            <div className="faq2">
                <button onClick={lessD} className="faq4">X</button>
            </div>
            <div className="faq3">
                <table id="monthlybd">
                    <tr>
                        <td><b>{`No. of Diets`}</b></td>
                        <td><b>{`Diet`}</b></td>
                        <td><b>{`Basic diet Amount`}</b></td>
                        <td><b>{`Extras`}</b></td>
                        <td><b>{`Guests`}</b></td>
                        <td><b>{`Monthly Total`}</b></td>
                        <td><b>{`Balance Amount`}</b></td>
                    </tr>
                    <tr>
                        <td>{props.nod}</td>
                        <td>{props.diet}</td>
                        <td>{props.bda}</td>
                        <td>{props.extra}</td>
                        <td>{props.guest}</td>
                        <td>{props.total}</td>
                        <td>{`17500`}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default MonthlyBillDetail;