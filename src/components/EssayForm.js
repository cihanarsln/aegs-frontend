import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EssayForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui pointing red basic label">
          {error}
        </div>
      );
    }
  }
  
    renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
        <div className={className}>
          <label>{label}</label>
          <textarea {...input} autoComplete="off" />
          {this.renderError(meta)}
        </div>
      );
    };

    renderTopic = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return(
        <div className={className}>
          <label>{label}</label>
          <select {...input} className="ui dropdown">
            <option value="Computer">Computer</option>
            <option value="Library">Library</option>
            <option value="Cyclist">Cyclist</option>
          </select>
          {this.renderError(meta)}
        </div>
    );
    };
  
    onSubmit = formValues => {
      this.props.onSubmit(formValues);
    };
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="selected_topic" component={this.renderTopic} label="Select Topic: "/>
          <Field name="essay" component={this.renderInput} label="Essay: "/>
          <button className="ui button positive " style={{margin: '10px 0px 10px 0px'}}>Show Score</button>
        </form>
      );
    }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.essay) {
    errors.essay = 'You must type an essay!';
  }

  if (!formValues.selected_topic) {
    errors.selected_topic = 'You must select a topic!';
  }

  return errors;
};
  
export default reduxForm({
    form: 'essayForm',
    validate
})(EssayForm);