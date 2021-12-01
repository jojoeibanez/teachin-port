import React from 'react'
import ResidentialImage from './resume1.jpg';
import { useHistory } from "react-router-dom";
import './Resume.css';

function Resume() {
    const history = useHistory();

    return (
        <div className="All-div">
            <h1 class="title">RESUME</h1>
            <hr />
            <p></p>
            <p class="pic">
                <img
                    src={ResidentialImage}
                />
            </p>
            <div className="All-div-one">
                <h2 >Teachin Eaksuverapong</h2>
                <blockquote class="slogan"><strong> <q>I am eager to learn new things and perform well under
                    pressure. I have my own special interest in IT, Network, Web developer.</q></strong></blockquote>
                <h2>Contact</h2>
                <ul>
                    <li>
                        <strong>Email</strong>: teachin.eak@mail.kmutt.ac.th</li>

                    <li>
                        <strong>
                            Facebook
                        </strong>: Teachin Eaksuverapong

                    </li>

                    <li>
                        <strong>Phone</strong>: 086-884-2304 </li>


                    <li>
                        <strong>Line</strong> : @jojoejj.</li>

                </ul>
                <h2>Graduated</h2>
                <ol>
                    <li><strong>BACHELOR'S DEGREE</strong> : Electronics And Telecommunication Engineering (International) <br /><strong class="Uni">University</strong> : Mongkut's University of Technology Thonburi<sub> |2016-2020|</sub></li>
                    <li><strong>HIGH SCHOOL</strong> : GSP Programming Suratpittaya School <sub> |2013-2016|</sub></li>
                    <li><strong>JUNIOR HIGH SCHOOL</strong> : Suratpittaya School<sub> |2010-2013|</sub></li>
                </ol>
                <h2>Skill</h2>
                <ul>
                    <li class="more-space">Python, HTML, CSS, Javascript, React.js</li>
                    <li class="more-space">Microsoft Office, VMware, MobaXterm, PuTTY</li>
                </ul>
                <h2 id="experience">Experience</h2>
                <table border="1" width="100%">
                    <tr>
                        <td class="year">June 2019 - September 2019</td>
                        <td class="project">INTERNSHIP at TOT Public Company Limited</td>
                    </tr>
                    <tr>
                        <td class="year">July 2020 - June 2021</td>
                        <td class="project">TECHNICAL SUPPORT at Long Data Technology (Thailand) Ltd.</td>
                    </tr>
                </table>

                <h2>CERTIFICATIONS AND LICENSES</h2>
                <ul class="Cer">
                    <li>CELLEBRITE CERTIFIED OPERATOR (CCO)</li>
                    <li>CELLEBRITE CERTIFIED PHYSICAL ANALYST (CCPA)</li>
                    <li class="uni">Private Car Licence No.62006481 </li>
                    <li class="uni">Private Motorcycle Licence No.61002609</li>
                    <li>Udemy Certificate Web-developer</li>
                </ul>
            </div>
            <div class="btn-resume-head">
                <button onClick={() => history.goBack()} class="btn-goBack">Back To HomePage</button>
            </div>
        </div>

    )
}

export default Resume
