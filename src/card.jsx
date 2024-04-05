import profilePic from './assets/frog.jpg'

function Card(){
    return(
        <div className="card">
            <img className="cardimg" src={profilePic} alt="This is an profile picture" />
            <h2>@dapt</h2>
            <pe>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
            </pe>
        </div>
    )
}

export default Card