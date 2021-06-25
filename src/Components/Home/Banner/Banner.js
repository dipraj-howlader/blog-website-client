import React from 'react';
import { useHistory } from 'react-router-dom';

const Banner = () => {
  const history = useHistory();

    const gotoUploadBlog = () =>[
      history.push('/login')
    ]

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a className="navbar-brand me-5"><h1>Bvlogger.com</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <button onClick={gotoUploadBlog} type="button" class="btn btn-primary ">Login</button>


      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Banner;