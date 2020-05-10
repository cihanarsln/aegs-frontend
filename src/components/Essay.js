import React from 'react';
import { connect } from 'react-redux';
import { getScore } from '../actions';
import lightning from '../images/lightning.png'
import { Link } from 'react-router-dom';
import EssayForm from './EssayForm';

class Essay extends React.Component{

    renderShowGrade(){
        if (this.props.essay.score !== undefined ) {
            return(
                <div style={{marginBottom: '20px'}}>
                    <div className="ui orange message">Your Score: {this.props.essay.score.score}</div>
                    <table className="ui orange table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sentence Count</td>
                                <td>{this.props.essay.score.sentence}</td>
                            </tr>
                            <tr>
                                <td>Correctly Spelled Word Count </td>
                                <td>{this.props.essay.score.correct}</td>
                            </tr>
                            <tr>
                                <td>Misspelled Word Count</td>
                                <td>{this.props.essay.score.misspelled}</td>
                            </tr>
                            <tr>
                                <td>Word Count after Removing Stop Words</td>
                                <td>{this.props.essay.score.word}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    onSubmit = formValues => {
        this.props.getScore(formValues);
      };
    
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
                    Type essay then submit it to see your score.
                </div>
                <EssayForm onSubmit={this.onSubmit} />
                {this.renderShowGrade()}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        essay: state.essay
    };
};

export default connect(
    mapStateToProps,
    { getScore }
)(Essay);