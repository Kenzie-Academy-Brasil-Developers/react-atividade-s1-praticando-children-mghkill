import "./style.css"
const CenteredCard = ({children, age}) => {
    
    return(
        <div > 
            <span className="centered">    
                {age.map((item,index) => (
                <div key={index}>
                    <h1>{children}</h1> 
                    <p>{item}</p>
                </div>
                ))}

            </span>
            
        </div>
    )
}

export default CenteredCard