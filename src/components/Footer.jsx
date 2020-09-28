import React from "react";
import {SiteVersion} from "./EnvironmentVars"


const Footer = () => {
    const host = window.location.hostname;
    // console.log("Footer:::"+window.location.href);
    // console.log("Footer:::"+window.location.protocol);
    // console.log("Footer:::"+window.location.host);
    // console.log("Footer:::"+window.location.hostname);
    // console.log("Footer:::"+window.location.pathname);
  return (
    <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="social">
                    <li><a href="https://www.instagram.com/_art.samaanata_/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/artsamaanata/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">

                <p className="copyright" style={{marginTop:"0px",paddingBottom:"0px"}}>Copyright &copy; 2020 Art Samaanata<br/>
                <img src="https://hitwebcounter.com/counter/counter.php?page=7658716&style=0038&nbdigits=3&type=ip&initCount=0" title="Total Website Hits Unique Visitors" alt="Web Hits"   border="0" ></img>
                {host!="localhost"?<img src="https://hitwebcounter.com/counter/counter.php?page=7679686&style=0038&nbdigits=4&type=page&initCount=100" title="Total Website Hits All Visitors Season 3" alt="Web Hits"   border="0"></img>:null}
                <br/>Ver:{SiteVersion}
                </p>
                
                {/* <a style={{align:center}} href="https://www.hitwebcounter.com" target="_blank">
                <img src="https://hitwebcounter.com/counter/counter.php?page=7657744&style=0038&nbdigits=5&type=page&initCount=100"  Alt="Web Hits"   border="0" /></a>    */}

            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
