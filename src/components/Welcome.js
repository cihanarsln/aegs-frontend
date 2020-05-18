import React from 'react';
import { Link } from 'react-router-dom';
import lightning from '../images/lightning.png'
import save from '../images/save.png';
import safe from '../images/safe.png';
import money from '../images/money.png';
import estu from '../images/estu.png';
import tubitak from '../images/tubitak.jpg';

const Welcome = () => {
    return(
        <div>
            <div style={{ padding: '15px 0px 10px 5px', marginBottom: '0px'}} className='ui secondary pointing menu'>
                <div className="left menu">
                    <img alt='logo' src={lightning} style={{height: '32px', width: '32px'}}/>
                    <h2 style={{color: '#ff5cf3', margin: '0px 0px 0px 5px'}}>aegs</h2>
                    <label style={{color: '#ff5cf3', padding: '7px 5px'}}>| Do Faster</label>
                </div>
                <div className="right menu">
                    <Link to="/essay" className="ui positive button">Learn Your Grade</Link>
                </div>
            </div>
            <div style={{textAlign: 'center', padding: '30px 0px 0px 0px'}}>
                <h2 style={{ fontFamily: 'Squada One', fontSize: '40px', margin: '0px 0px'}}>Automated</h2>
                <h2 style={{ fontFamily: 'Squada One', fontSize: '40px', margin: '0px 0px 5px 0px'}}>Essay Grading</h2>
                <label style={{ fontFamily: 'Abel', fontSize: '16px', color: '#277a7d'}}>aegs is an online collaboration platform that’s built around your needs, fast and cheap</label>
            </div>
            <div className="ui divider"></div>
            <div className="ui three column grid">
                <div className="row">
                    <div className="column">
                        <div className="ui items">
                        <div className="item">
                            <div className="image" style={{width: '32px', height: '32px'}}>
                                <img alt='reliable' src={safe} style={{width: '32px', height: '32px'}} />
                            </div>
                            <div className="content">
                                <label className="header">Reliable</label>
                                <div className="meta">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui items">
                        <div className="item">
                            <div className="image" style={{width: '32px', height: '32px'}}>
                                <img alt='fast' src={save} style={{width: '32px', height: '32px'}} />
                            </div>
                            <div className="content">
                                <label className="header">Fast</label>
                                <div className="meta">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                         <div className="ui items">
                        <div className="item">
                            <div className="image" style={{width: '32px', height: '32px'}}>
                                <img alt='cheap' src={money} style={{width: '32px', height: '32px'}} />
                            </div>
                            <div className="content">
                                <label className="header">Cheap</label>
                                <div className="meta">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '40px'}}>
                <iframe title="aegs" width="100%" height="400" src="https://www.youtube.com/embed/uLyJYsu6SZ0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="ui divider"></div>
            <div className="ui two column grid">
                <div className="column">
                    <div className="ui segment">
                        <div className="ui huge horizantal list">
                        <div className="item">
                            <img className="ui avatar image" src={tubitak} alt="tubitak" />
                            <div className="content">
                            <div className="header">TUBITAK</div>
                            <span style={{color: 'grey', fontSize:'14px'}}>2209-A</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                    <div className="ui huge horizantal list">
                        <div className="item">
                            <img className="ui avatar image" src={estu} alt="estu" />
                            <div className="content">
                                <div className="header">ESKISEHIR TECHNICAL UNIVERSITY</div>
                                <span style={{color: 'grey', fontSize:'14px'}}>Faculty of Engineering</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui four cards">
                <div className="red card" style={{height: '100px'}}>
                    <div className="content">
                        <div className="header">Alper Bilge</div>
                        <div className="meta">
                            <span className="date">Ceng / Supervisor</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="red user icon"></i>
                            Eskisehir Technical University
                        </span>
                    </div>
                </div>
                <div className="blue card" style={{height: '100px'}}>
                    <div className="content">
                        <div className="header">Alper Burak Arığa</div>
                        <div className="meta">
                            <span className="date">Ceng</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="blue user icon"></i>
                            Eskisehir Technical University
                        </span>
                    </div>
                </div>
                <div className="blue card" style={{height: '100px'}}>
                    <div className="content">
                        <div className="header">Burak Donat</div>
                            <div className="meta">
                                <span className="date">Ceng</span>
                            </div>
                        </div>
                    <div className="extra content">
                        <span>
                            <i className="blue user icon"></i>
                            Eskisehir Technical University
                        </span>
                    </div>
                </div>
                <div className="blue card" style={{height: '100px'}}>
                    <div className="content">
                        <div className="header">Cihan Arslan</div>
                        <div className="meta">
                            <span className="date">Ceng</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="blue user icon"></i>
                            Eskisehir Technical University
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;