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
    <button onClick={gotoUploadBlog} type="button" class="btn btn-primary ">Login</button>
  </div>
</nav>
        </div>
    );
};

export default Banner;
