const Card = (props) => {
  // console.log(props);
  
  return (
    <div className="card">
                <img src={props.img} alt="profile picture" />
                {props.user},{props.age}
              <p>{props.about}</p>
      <button>Get Profile</button>
      </div>
  )
}

export default Card