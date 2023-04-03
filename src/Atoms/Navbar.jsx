import React from 'react'

function Navbar() {
    return (
        <nav class="px-3 navbar navbar-expand-lg navbar-light">
            <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" width="50px" alt="" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-none" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/">About</a>
                    <a class="nav-item nav-link" href="/">Past</a>
                    <a class="nav-item nav-link" href="/">Schedule</a>
                    <a class="nav-item nav-link" href="/">Team</a>
                    <button className='btn btn-dark'>Register Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar