import React from 'react';
import { Link } from 'react-router-dom';
import lightning from '../images/lightning.png'
import save from '../images/save.png';
import safe from '../images/safe.png';
import money from '../images/money.png';
import franklin from '../images/franklin.png';
import micheal from '../images/micheal.jpg';
import trevor from '../images/trevor.jpg';
import abilge from '../images/abilge.jpg';
import estu from '../images/estu.jpg';

const Welcome = () => {
    return(
        <div>
            <div style={{ padding: '15px 0px 10px 5px', marginBottom: '0px'}} className='ui secondary pointing menu'>
                <div className="left menu">
                    <img alt='logo' src={lightning} style={{height: '32px', width: '32px'}}/>
                    <h2 style={{color: '#ff5cf3', margin: '0px 0px 0px 5px'}}>aegs</h2>
                    <label style={{color: '#ff5cf3', padding: '7px 5px'}}>| The Platform To AFILLIBISI</label>
                </div>
                <div className="right menu">
                    <Link to="/essay" className="ui positive button">Learn Your Grade</Link>
                </div>
            </div>
            <div style={{textAlign: 'center', padding: '30px 0px 0px 0px'}}>
                <h2 style={{ fontFamily: 'Squada One', fontSize: '40px', margin: '0px 0px'}}>Automated</h2>
                <h2 style={{ fontFamily: 'Squada One', fontSize: '40px', margin: '0px 0px 5px 0px'}}>Essay Grading</h2>
                <label style={{ fontFamily: 'Abel', fontSize: '16px', color: '#277a7d'}}>aegs is an online collaboration platform that’s built around your needs, and it’s free.</label>
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
            <div className="ui divider"></div>
            <div className="ui four column grid">
                <div className="row">
                    <div className="column">
                        <div className="ui items">
                        <div className="item">
                            <div className="ui small circular image" >
                                <img alt='abilge' src={abilge} style={{width: '150px', height: '100px'}} />
                            </div>
                            <div className="content">
                                <label className="header">Alper Bilge</label>
                                <div className="meta">
                                    <span>Ceng / Supervisor</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui items">
                        <div className="item">
                            <div className="ui small circular image" >
                                <img alt='alper' src={trevor} style={{width: '150px', height: '100px'}} />
                            </div>
                            <div className="content">
                                <label className="header">Alper Burak Ariga</label>
                                <div className="meta">
                                    <span>Ceng</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui items">
                        <div className="item">
                            <div className="ui small circular image" >
                                <img alt='burak' src={micheal} style={{width: '150px', height: '100px'}}/>
                            </div>
                            <div className="content">
                                <label className="header">Burak Donat</label>
                                <div className="meta">
                                    <span>Ceng</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                         <div className="ui items">
                        <div className="item">
                            <div className="ui small circular image" >
                                <img alt='cihan' src={franklin} style={{width: '150px', height: '100px'}} />
                            </div>
                            <div className="content">
                                <label className="header">Cihan Arslan</label>
                                <div className="meta">
                                    <span>Ceng</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;