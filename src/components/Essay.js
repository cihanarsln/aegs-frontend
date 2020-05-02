import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import lightning from '../images/lightning.png'
import { Link } from 'react-router-dom';


class Essay extends React.Component{
    
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

    renderShowGrade(){
        return(
            <div style={{marginBottom: '20px'}}>
                <div class="ui orange message">Your Score: 4.5</div>
                <table class="ui orange table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sentence Count</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>Sentence-Word Ratio</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Word Count after Removing Stop Words</td>
                            <td>160</td>
                        </tr>
                        <tr>
                            <td>Misspelled Word Count</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    
    render() {
    return (
        <div>
            <div style={{ padding: '15px 0px 10px 5px', marginBottom: '10px'}} className='ui secondary pointing menu'>
                <Link to="/">
                    <div className="left menu">
                        <img alt='logo' src={lightning} style={{height: '32px', width: '32px'}}/>
                        <h2 style={{color: '#ff5cf3', margin: '0px 0px 0px 5px'}}>aegs</h2>
                    </div>
                </Link>
            </div>
            <div className="ui yellow message">
                <i className="star icon"></i>
                Select topic and type essay then submit it to see your grade.
            </div>
            <form className="ui form">
                <Field name="topic" component={this.renderSelect} label="Topic:"/>
                <Field name="essay" component={this.renderTextArea} label="Essay:"/>
                <button className="ui button positive" style={{margin:'10px 0px 20px 0px'}}>Show Grade</button>
            </form>
            {this.renderShowGrade()}
        </div>
    );
    }

}

export default reduxForm({
    form: 'essay',
})(Essay);

