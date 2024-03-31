import "./displayBill.css"
import MonthlyBill from "./monthlyBill";
import WelcomeUser from "./WelcomeUser";
const DisplayBill=(props)=>{

    const dismonthlybill=()=>{
        console.log(props.roll);
        return(
            <div>
                <WelcomeUser name={props.billData.Name} roomno={parseInt(props.billData.RoomNo)}/>
                <br></br>
                <br></br>
                <div className="faq7">
                {
                    props.billData.bill.map((e,i)=>{
                        return(
                            <MonthlyBill key={i}  month={e[0][1]} nod={parseInt(e[1][1])} diet={(e[2][1])} bda={e[3][1]} extra={e[4][1]} guest={e[5][1]} total={e[e.length-1][1]} ba={`17500`}/>
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