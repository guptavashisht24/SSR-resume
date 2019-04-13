import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="fg">
            <div className="w100 flx bshadow p20">
                <div className="logo ml10">
                    <img src="im.jpg" height="250px" width="250px"></img>
                </div>
                <div className="content mr10">
                    <div className="crx head ff fs16"><b>IndiaMART InterMESH Limited</b></div>
                    <div className="crx head ff fs16">
                    <div className="fl">
                        <em><b>Software Programmer</b></em>
                    </div>
                        <div className="fr">
                            <em><b>July’18 - Present</b></em>
                        </div>
                    </div>
                    <ul className="ff fWg">
                        <li>Developed new features on, and Mantained Company Module of IndiaMART’s mobile website.</li>
                        <li>Optimized the code and employed best coding strategies to provide the best user experience by sequencing the loading
                            of external Javascript files according to user requirement before or after page load, thereby acheiving a near perfect
                            page speed insights score of 99 for company module.</li>
                        <li>Implemented Voice Search across mobile website and mantained PWA modules.</li>
                        <li>Migrated IndiaMART’s home page from PHP to Javascript(PWA) using React-Redux and NodeJS in order to provide a
                            better user experience</li>
                    </ul>
                </div>
            </div>
                <div className="w100 flx bshadow p20 mt10">
                <div className="content mr10">
                    <div className="crx head ff fs16"><b>IndiaMART InterMESH Limited</b></div>
                    <div className="crx head ff fs16">
                        <div className="fl">
                            <em><b>Associate Software Programmer</b></em>
                        </div>
                        <div className="fr">
                            <em><b>June’17 - June'18</b></em>
                        </div>
                    </div>
                    <ul className="ff fWg">
                        <li>Developed new features on, and looked after Login/Identification, Manage buy requirement, profile and Home modules
                            of IndiaMART mobile website, using Javascript and PHP.</li>
                            <li>Implemented and Mantained personalization widgets across modules on mobile website, using Javascript and PHP.</li>
                            <li>Restructured the entire code base of home module of mobile website for better code modularity, readability and easy
                                mantainence.</li>
                            <li>Played a vital role in migrating search module of mobile website from a standard server side rendered web application
                                to Progressive Web App(PWA) by re-implementing features of search module in ReactJS, Node JS, and Redux. The
                                features were earlier developed in PHP and Javascript</li>
                            <li>Maintained Seller modules on PWA(ReactJS and NodeJS) portion of mobile website</li>

                    </ul>
                </div>
                <div className="logo ml10">
                    <img src="im.jpg" height="250px" width="250px"></img>
                </div>
            </div>
                <div className="w100 flx bshadow p20 mt10">
                    <div className="logo ml10">
                        <img src="tcs.png" height="250px" width="250px"></img>
                    </div>
                    <div className="content mr10">
                        <div className="crx head ff fs16"><b>Tata Consultancy Services</b></div>
                        <div className="crx head ff fs16">
                            <div className="fl">
                                <em><b>Remote Intern</b></em>
                            </div>
                            <div className="fr">
                                <em><b>June’16 - July'16</b></em>
                            </div>
                        </div>
                        <ul className="ff fWg">
                            <li>Developed a web based E-commerce Application,using Django Framework, and Python, with a fully functional Catalog
                                and Cart, which recommends products(Product page recommendations and Home page recommendations) to the users
                                based on the statistics of the products, and performed functional testing on the application</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;