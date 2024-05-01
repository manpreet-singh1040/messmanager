import "./displayBill.css"
import MonthlyBill from "./monthlyBill";
import WelcomeUser from "./WelcomeUser";
const DisplayBill=(props)=>{

    const dismonthlybill=()=>{
        console.log(props.roll);
        return(
            <div>
                <WelcomeUser name={props.billData.name} roomno={parseInt(props.billData.roomno)}  hostel={props.billData.hostel}/>
                <br></br>
                <br></br>
                <div className="faq7">
                {
                    props.billData.bill.map((e,i)=>{
                        return(
                            <MonthlyBill key={i}  month={e.month} nod={parseInt(e.diet)} diet={(e.dietrate)} bda={e.diettotal} extra={e.extra} guest={e.guest} total={e.total} ba={`17500`}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
    return(
        <div className="faq6">

           
            {
                dismonthlybill()
            }
        </div>
    )
}
export default DisplayBill;