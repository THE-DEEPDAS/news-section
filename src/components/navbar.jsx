const Navbar = ({setCategory}) => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    {/* <div className="navbar-brand"><span className="badge bg-light text-dark fs-4">CapiFy</span></div>  */}
                    {/* you can also use png of your logo than span tag */}
                    <div className="navbar-brand text-centerfs-4" ><span className="badge text-center bg-light text-dark fs-4"> CapiFy </span></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-20 p-10">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">News</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">Resources</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">Blogs</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">Market</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">invest</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">Budget</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active">About</div>
                            </li>

                        </ul>
                        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    country
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">India</a></li>
    <li><a class="dropdown-item" href="#">USA</a></li>
    <li><a class="dropdown-item" href="#">SO ON</a></li>
  </ul>
</div>
                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar