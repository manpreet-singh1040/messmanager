

const MonthlyBill=(props)=>{

    return(
        <div style={{display:`flex`,justifyContent:`space-evenly`,backgroundColor:`lightblue`}}>
            <div className="A" style={{display:`inline-block`}}>{`${props.month}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.nod}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.diet}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.bda}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.extra}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.guest}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.total}`}</div>
            <div className="A" style={{display:`inline-block`}}>{`${props.ba}`}</div>
        </div>
    )
}
export default MonthlyBill