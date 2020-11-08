import React from "react";


const HeaderInternal = () => {
  return (
    <header className="header-area header-sticky ">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav"
                style={{
                    background:"linear-gradient(127deg, #a759d1 0%, #8261ee 91%)"
                }}>
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="/" className="logo">
                        <img src="/assets/images/logo.png" alt="Art Samaanata"/>
                    </a>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        
                        <li><a href="/register">Registration</a></li>
                        
                    </ul>
                    {/* <a className='menu-trigger'>
                        <span>Menu</span>
                    </a> */}
                    {/* ***** Menu End ***** */}
                </nav>
            </div>
        </div>
    </div>
</header>
  );
};

export default HeaderInternal;
