import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderError = ({touched,error}) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label,meta}) => {
        //destructure form propery and spread in side input element it is same as setting attribute seperately
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui primary button">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'Please enter title';
    }
    if(!formValues.description){
        errors.description = 'Please enter description';
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
