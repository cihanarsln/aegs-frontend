import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';


class EssayCreate extends React.Component{
    
    renderSelect = ({label}) => {
        return(
            <div>
                <label>{label}</label>
                <select>
                    <option value="computer">Computer</option>
                </select>
            </div>
        );
    };

    renderTextArea = ({label}) => {
        return(
            <div style={{marginTop:'10px'}}>
                <label>{label}</label>
                <textarea></textarea>
            </div>
        );
    };
    
    render() {
    return (
        <div style={{marginTop: '20px'}}>
            <div class="ui yellow message">
                <i class="star icon"></i>
                Select topic and type essay then submit it to see your grade.
            </div>
            <form className="ui form">
                <Field name="topic" component={this.renderSelect} label="Topic:"/>
                <Field name="essay" component={this.renderTextArea} label="Essay:"/>
                <button className="ui button primary" style={{marginTop:'10px'}}>Submit</button>
            </form>
        </div>
    );
    }

}

export default reduxForm({
    form: 'essayCreate',
})(EssayCreate);

