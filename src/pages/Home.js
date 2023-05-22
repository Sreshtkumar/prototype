
import "../styles.css"

export default function About () {
    return (<>
    {/* <h1>Home</h1> */}
    <div className="hero">
        <div><img className="bio-image" alt="My Interests are being described here" src={require("../Images/splash.jpeg")}/></div>
        <div>
            <h1>Brief introduction goes here!!</h1>
            <h2>TBD</h2>
        </div>
    </div>
    <div className="block1">
        <div>
            <h1>Brief introduction goes here!!</h1>
            <h2>TBD</h2>
        </div>
        <div><img className="bio-image" alt="My Interests are being described here" src={require("../Images/splash.jpeg")}/></div>
    </div>
    </>)
}