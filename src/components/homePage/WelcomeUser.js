

const WelcomeUser=(props)=>{
    return(
        <div style={{border:`2px solid black`,borderRadius:`10px`}}>
            <div style={{fontWeight:`bolder`,color:`white`,backgroundColor:`darkblue`,width:`100%`,fontSize:`20px`,paddingLeft:`5%`,borderRadius:`10px 10px 0px 0px`}}>
                Welcome
            </div>
            <div style={{width:`100%`}}>
                <div style={{display:`flex`,alignItems:"center",justifyContent:`center`,height:`50%`,fontSize:`27px`}}>HELLO!!{`${props.name}`}</div>
                <div style={{display:`flex`,alignItems:"center",justifyContent:`center`,height:`50%`,fontSize:`27px`}}> ROOM No.{`${props.roomno}`}</div>
                <div style={{display:`flex`,alignItems:"center",justifyContent:`center`,height:`50%`,fontSize:`27px`}}> HOSTEL-{`${props.hostel}`}</div>
                <table>
                    
                </table>
            </div>
        </div>
    )
}
export default WelcomeUser;