import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EssayForm extends React.Component {
  
    renderInput = ({ input, label }) => {
      return (
        <div>
          <label>{label}</label>
          <textarea {...input} autoComplete="off" />
        </div>
      );
    };
  
    onSubmit = formValues => {
      this.props.onSubmit(formValues);
    };
  
    render() {
      return (
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="essay" component={this.renderInput} label="Essay: " />
          <button className="ui button positive " style={{margin: '10px 0px 10px 0px'}}>Show Score</button>
        </form>
      );
    }
}
  
export default reduxForm({
    form: 'essayForm'
})(EssayForm);