


import { BrowserRouter as Router, Route, Routes, NavLink, Link} from 'react-router-dom';
import ChoiceBox from '../choiceBox';
import IMAGES from '../../assets/images.js';
import TAndS from '../titleAndSubText.js'
import SignInButton from '../signInButton.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';



import React from 'react';




<div className="bgContainer">

    <TAndS title="Waqq.ly" subtext="A place where dog owners can find dog walkers!" animation="animation-wrapper"/>


    
    <div className="choiceBoxes">

            <div>
                <Link to="/registerPage/?type=owner" id='owner' className='linkBox' style={{textDecoration: "none"}}>
                    <ChoiceBox color="blue" title="Dog Owner" bodyText="You are a person who owns a dog and is looking for a dog walker!"/>
                </Link>               
            </div>


            <div>
                <Link to="/registerPage/?type=walker" id='walker' className='linkBox' style={{textDecoration: "none"}}>
                    <ChoiceBox color="green" title="Dog Walker" bodyText="You are a person who is looking for dog owners nearby!"/>
                </Link>  
            </div>

        
    </div>
    <div className="check-wrapper">
        <div className="signIn-wrapper">
            <p className="check">Already have an account? Sign in here: </p>
        </div>

        <SignInButton text = "Sign In" destination="/signIn/?type=unknown"/>
    </div>

    <SignInButton text = "Map test" destination="/mapPage"/>
    
</div>


