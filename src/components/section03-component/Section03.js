import React from 'react';
import './Section03.css';
import '../custom-box-component/CustomBox'
import CustomBox from "../custom-box-component/CustomBox";


function Section03 (){
    return(
     <div id="section03">
        <div className="container-fluid header text-center">
                <small>QUALIFIED EXPERTS IN INDUSTRY 4.0</small>
            <div className="offset-3 col-6 text-center mt-3">
                <h2>Top 30% of Experts and Suppliers in Digital Transformation</h2>
                <hr className="small-hr"/>
            </div>
        </div>
         <p className="lead text-center">Access hundreds of Experts, Consulting Firms and Technology Providers specialized<br/> in
             Industry 4.0, from all around the world, <b> and make your digital journey a success. </b></p>
         <br/>
         <div className="row mt-5 container-fluid">
             <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
                 <CustomBox number={"+500"}
                            part1={"Specialized providers"}
                            part2={"in Industry 4.0"}    />
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
                 <CustomBox number={"+60%"}
                            part1={"With more than 10 years "}
                            part2={"of experience"}    />
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
                 <CustomBox number={"+20"}
                            part1={"Based in more than"}
                            part2={"20 countries"}    />
             </div>
         </div>
         <br/><br/>
     </div>
    )
}


export default Section03;
