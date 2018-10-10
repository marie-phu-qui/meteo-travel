import React from "react";


const Form = () => {
return(
    <div>
        <form className="form-inline"> 

            <label className="sr-only" htmlFor="inlineFormInput">city</label> 
            <input className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="City"/> 
            <label className="sr-only" >country</label> 

            <div className="input-group mb-2 mr-sm-2 mb-sm-0"> 
                <div className="input-group-addon">in
                </div> 
                <input className="form-control" placeholder="Country"/>
            </div> 

            <div className="btn-group" data-toggle="buttons"> 
                <label className="btn btn-primary active"> 
                <input type="radio" name="unit" value="metric" checked=""/>metric 
                </label> 
                <label className="btn btn-primary"> 
                <input type="radio" name="unit" value="imperial"/> imperial 
                </label> 
            </div>

            <input className='btn btn-primary btn-lg btn-block' type='button' value='submit'/>
        </form>
    </div>
)}

export default Form