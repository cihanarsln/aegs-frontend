import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import lightning from '../images/lightning.png'
import { Link } from 'react-router-dom';


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
        <div>
            <div style={{ padding: '15px 0px 10px 5px', marginBottom: '10px'}} className='ui secondary pointing menu'>
                <Link to="/">
                    <div className="left menu">
                        <img alt='logo' src={lightning} style={{height: '32px', width: '32px'}}/>
                        <h2 style={{color: '#ff5cf3', margin: '0px 0px 0px 5px'}}>aegs</h2>
                        <label style={{color: '#ff5cf3', padding: '7px 5px'}}>| The Platform To AFILLIBISI</label>
                    </div>
                </Link>
            </div>
            <div class="ui yellow message">
                <i class="star icon"></i>
                Select topic and type essay then submit it to see your grade.
            </div>
            <form className="ui form">
                <Field name="topic" component={this.renderSelect} label="Topic:"/>
                <Field name="essay" component={this.renderTextArea} label="Essay:"/>
                <button className="ui button positive" style={{marginTop:'10px'}}>Show Grade</button>
            </form>
        </div>
    );
    }

}

export default reduxForm({
    form: 'essayCreate',
})(EssayCreate);

