import "./style.css"
const CenteredCard = ({children, age}) => {
    return(
        <div className="centered"> 
            <span>    
               <h1>{children}</h1>
               {age}
            </span>
        </div>
    )
}

export default CenteredCard