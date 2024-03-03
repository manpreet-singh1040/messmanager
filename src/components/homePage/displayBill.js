
import MonthlyBill from "./monthlyBill";
import WelcomeUser from "./WelcomeUser";
const DisplayBill=(props)=>{

    const dismonthlybill=()=>{
        console.log(props.roll);
        return(
            <div>
                <WelcomeUser name={props.billData[0].Name} roomno={props.billData[0].RoomNo}/>
                {
                    props.billData.map((e,i)=>{
                        return(
                            <MonthlyBill key={i}  month={`January`} nod={e.Diet} diet={e.Dietrate} bda={e.Ddietrate} extra={e.Extra} guest={e.Guest} total={e.Total} ba={`17500`}/>
                        )
                    })
                }
            </div>
        )
    }
    return(
        <div>

            <div style={{display:`flex`,justifyContent:`space-evenly`,backgroundColor:`lightblue`}}>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Month</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>No. of diet</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Diet rate</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Basic diet amount</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Extra</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Guest</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Total</div>
                <div className="A" style={{backgroundColor:`beige`,display:`inline-block`,border:`2px solid black`,borderRadius:`5px`}}>Balance Amount</div>
            </div>
            {
                dismonthlybill()
            }
        </div>
    )
}
export default DisplayBill;