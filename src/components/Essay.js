import React from 'react';
import { connect } from 'react-redux';
import { getScore } from '../actions';
import lightning from '../images/lightning.png'
import { Link } from 'react-router-dom';
import EssayForm from './EssayForm';

class Essay extends React.Component{

    renderMisspelled(){
        if(this.props.essay.score.correction.localeCompare("") !== 0){
            const correction = this.props.essay.score.correction;
            const tuples = correction.split(',');
            return tuples.map(tuple => {
                return(
                    <div className="ui red label">
                        {tuple}
                    </div>
                )
            })
        }
    }

    renderTopicResult(){
        if (this.props.essay.score.selected_topic.localeCompare(this.props.essay.score.predicted_topic) === 0){
            return(
                <div className="ui green message">Detected Topic: {this.props.essay.score.predicted_topic}</div>
            );
        }
        return <div className="ui red message">Detected topic and selected topic did not match! Are you sure you selected the right topic? </div>;
    }

    renderShowGrade(){
        if (this.props.essay.score !== undefined) {
            return(
                <div style={{marginBottom: '20px'}}>
                    {this.renderTopicResult()}
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
                            <tr>
                                <td>Unique Word Count after Removing Stop Words</td>
                                <td>{this.props.essay.score.unique}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <h2 className="ui sub header">
                            Misspelled Words
                        </h2>
                    </div>
                    <div className="ui horizontal list">{this.renderMisspelled()}</div>
                    <div className="ui orange message">Your Score: {this.props.essay.score.score}</div>
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
                    Select topic then type your essay then submit it to see your score.
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