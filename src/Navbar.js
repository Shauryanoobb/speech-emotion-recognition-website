import React from 'react'




export default function Navbar(props){

 
  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Speech-Emotion-Detection</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
           {props.State}
          </a>
          <ul class="dropdown-menu">
            <li><a onClick={props.handleClickHome} class="dropdown-item" href="#">Home</a></li>
            <li><a onClick={props.handleClickAboutUs} class="dropdown-item" href="#">About Us</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>
  )
}