import React, { Component } from 'react';
import FormErrors from './FormErrors.js';
import './ContactForm.css';
var data = require('../assets/data/states.json');


class ContactForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname: '',
            email: '',
            zipcode: '',
            state: '',
            'formErrors': {
                firstname : '',
                lastname: '',
                email: '',
                zipcode: ''
            },
            firstnameValid: false,
            lastnameValid: false,
            emailValid: false,
            zipcodeValid : false
        }
    }

    handleUserInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateField(name, value){
        let validationErrors = this.state.formErrors;
        let firstnameValid = this.state.firstnameValid;
        let lastnameValid = this.state.lastnameValid;
        let emailValid = this.state.emailValid;
        let zipcodeValid = this.state.zipcodeValid;
        switch(name) {
            case 'firstname':
              firstnameValid = value.match(/^[a-zA-Z\s]+$/i);
              validationErrors.firstname = firstnameValid ? '' : 'Invalid First Name';
              break;
            case 'lastname':
              lastnameValid = value.match(/^[a-zA-Z\s'-]+$/i);
              validationErrors.lastname = lastnameValid ? '': 'Invalid Last Name';
              break;
              case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              validationErrors.email = emailValid ? '' : 'Invalid Email ID';
              break;
              case 'zipcode':
              zipcodeValid = value.match(/^\d{5}(?:[-\s]\d{4})?$/i);
              validationErrors.zipcode = zipcodeValid ? '' : 'Invalid Zipcode';
              break;
            default:
              break;
          }
          this.setState({formErrors: validationErrors,
                          firstnameValid: firstnameValid,
                          lastnameValid: lastnameValid,
                          emailValid: emailValid,
                          zipcodeValid: zipcodeValid
                        }, this.validateForm);
        }
        
        validateForm() {
            this.setState({formValid: this.state.firstnameValid && this.state.lastnameValid && this.state.emailValid && this.state.zipcodeValid});
        }

        errorClass(error) {
            return(error.length === 0 ? '' : 'bg-danger text-white');
         }

         resetForm(e){
            e.preventDefault();
            this.setState({
                firstname:'',
                lastname:'',
                email:'',
                zipcode:'',
                state:''
            });

         }
    

  render() {
    return (
    
        <div>
            <h1>Contact Us</h1>

            <form method="POST" action="some.php">
            <div>
                <FormErrors formErrors={this.state.formErrors.firstname} />
            </div>
            <div className='form-group'>
                <div className="col-12">
                    <input className={`form-control ${this.errorClass(this.state.formErrors.firstname)}`} type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}
                    onChange = {(event) => this.handleUserInput(event)}/>
                </div>
            </div>
            <div>
            <FormErrors formErrors={this.state.formErrors.lastname} />
        </div>
            <div className="form-group ">
                <div className="col-12">
                    <input className={`form-control ${this.errorClass(this.state.formErrors.lastname)}`} type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}
                    onChange = {(event) => this.handleUserInput(event)}/>
                </div>
            </div>
            <div>
            <FormErrors formErrors={this.state.formErrors.email} />
        </div>
            <div className="form-group">
                <div className="col-12">
                <input className={`form-control ${this.errorClass(this.state.formErrors.email)}`} type="text" id="email" name="email" placeholder="Email ID" value={this.state.email}
                onChange = {(event) => this.handleUserInput(event)}/>
                </div>
            </div>
            <div>
            <FormErrors formErrors={this.state.formErrors.zipcode} />
        </div>
            <div className="form-group">
                <div className="col-12">
                    <input className={`form-control ${this.errorClass(this.state.formErrors.zipcode)}`} type="text" id="zipcode" name="zipcode" placeholder="Zip Code" value={this.state.zipcode}
                    onChange = {(event) => this.handleUserInput(event)}/>
                </div>
            </div>
            <div className="form-group">
            <div className="col-12">
            <select className="form-control" id="state" name="state" value={this.state.state}  onChange = {(event) => this.handleUserInput(event)}>
            <option value="" disabled selected>State</option>
              {
                  data.map((state, idx) => {
                  return (
                      <option key={state.abbreviation} value={state.name}>{state.abbreviation}</option>
                  );
              })}
            </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-12">
                <button className ="btn btn-primary btn-lg btn-block" disabled={!this.state.formValid} onClick={(event) => event.preventDefault()}>Submit</button>
            </div>
           </div>
           <div className="form-group">
           <div className="col-12">
               <button className ="btn btn-danger btn-lg btn-block" onClick={(event) => this.resetForm(event)}>Reset</button>
           </div>
          </div>  
          
           </form>


        </div>
      
    );
  }
}

export default ContactForm;

