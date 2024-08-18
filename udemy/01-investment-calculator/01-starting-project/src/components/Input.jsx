export default function Input({data, handleChange}) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} =data;
    // console.log(Number(initial), Number(annual), Number(returns), Number(duration));
    
    return(
        <section id="user-input">
            <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input type='number' value={initialInvestment} onChange={(e) =>{ handleChange("initialInvestment", e.target.value) }} required />
            </p>
            <p>
                <label>ANNUAL INVESTMENT</label>
                <input type='number' value={annualInvestment} onChange={(e) => {handleChange("annualInvestment", e.target.value)}} required/>
            </p>
            </div>
            
            <div className="input-group">
            <p>
                <label>RETURNS</label>
                <input type='number' value={expectedReturn} onChange={(e) => {handleChange("expectedReturn", e.target.value)}} required/>
            </p>
            <p>
                <label>DURATION</label>
                <input type='number' value={duration} onChange={(e)=>{handleChange("duration", e.target.value)}} required/>
            </p>
            </div>
            
        </section>
    )
}