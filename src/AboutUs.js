import React from 'react'
import './index.css'
import './App.css'

export default function AboutUs(){
    return(
        <div>
           <h3 className="aboutus-heading">
            Team members-
           </h3>
           <div className="container">
                <div class="card" >
                <div className='col-sm-6'>
                <div class="card-body">
                <h5 class="card-title">Ayush Awasthi</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Team Leader,ML</h6>
                <p class="card-text">Contact-
                <a href="#" class="card-link">github</a>
                <a href="#" class="card-link">linkedin</a>
                <a href="#" class="card-link">Mail</a>
                </p>
                </div>
                </div>
                </div>
            

                <div class="card" >
                <div className='col-sm-6'>
                <div class="card-body">
                <h5 class="card-title">Shaurya Khetarpal</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">ML,Web-DEV</h6>
                <p class="card-text">Contact-
                <a href="https://github.com/Shauryanoobb" class="card-link">github</a>
                <a href="https://www.linkedin.com/mwlite/in/shaurya-khetarpal-04315b253" class="card-link">linkedin</a>
                <a href="#" class="card-link">Mail</a>
                </p>
                </div>
                </div>
                </div>
            </div>

            <div className="container">
                <div class="card" >
                <div className='col-sm-6'>
                <div class="card-body">
                <h5 class="card-title">Atharva Nanoti</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">ML,Web DEV</h6>
                <p class="card-text">Contact-
                <a href="#" class="card-link">github</a>
                <a href="#" class="card-link">linkedin</a>
                <a href="#" class="card-link">Mail</a>
                </p>
                </div>
                </div>
                </div>
            

                <div class="card" >
                <div className='col-sm-6'>
                <div class="card-body">
                <h5 class="card-title">Jasmer Singh</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Dataset,ML</h6>
                <p class="card-text">Contact-
                <a href="#" class="card-link">github</a>
                <a href="#" class="card-link">linkedin</a>
                <a href="#" class="card-link">Mail</a>
                </p>
                </div>
                </div>
                </div>
            </div>

        </div>
    );
}