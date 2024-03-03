

const WelcomeUser=(props)=>{
    return(
        <div style={{display:`flex`,justifyContent:`space-between`}}>
            <div>
                <img src="https://i.gifer.com/bfB.gif" alt="hello-gif" style={{display:`inline-flex`,height:`20vh`,flexGrow:`1`}}></img>
            </div>
            <div style={{width:`100%`}}>
                <div style={{display:`flex`,alignItems:"center",justifyContent:`center`,height:`50%`,fontSize:`27px`}}>HELLO!!{`${props.name}`}</div>
                <div style={{display:`flex`,alignItems:"center",justifyContent:`center`,height:`50%`,fontSize:`27px`}}> ROOM No.{`${props.roomno}`}</div>
            </div>
        </div>
    )
}
export default WelcomeUser;