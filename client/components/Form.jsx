import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unit : '',
            city: '',
            country: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    handleClick() {
        const { unit, city , country} = this.state;
        console.log(this.state)
      }

    render () {
        console.log(this.state)
    return(
        <div>
            <form className="form-inline"> 

                <label className="sr-only" htmlFor="inlineFormInput">city</label> 
                <input className="form-control mb-2 mr-sm-2 mb-sm-0" name="city" placeholder="City" onChange={this.handleChange}/> 
                
                <label className="sr-only" >country</label> 
                <div className="input-group mb-2 mr-sm-2 mb-sm-0"> 
                    <div className="input-group-addon">in
                    </div> 
                    <input className="form-control" name="country" placeholder="Country" onChange={this.handleChange}/>
                </div> 

                <div className="btn-group" data-toggle="buttons"> 
                    <label className="btn btn-primary active"> 
                    <input type="radio" name="unit" value="metric" checked="" defaultChecked={this.state.unit} onChange={this.handleChange}/>metric 
                    </label> 
                    <label className="btn btn-primary"> 
                    <input type="radio" name="unit" value="imperial" onChange={this.handleChange}/>imperial 
                    </label> 
                </div>

                <input className='btn btn-primary btn-lg btn-block' type='button' value='submit' onClick={this.handleClick}/>
            </form>
        </div>
    )}
    }

export default Form