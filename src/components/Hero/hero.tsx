import Button from "../Button/button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="ist">
      {/* h1 text */}
<h1 id="front-h1">
  <span id="front-h1-span">Front-end</span>
   developer</h1>

   {/* paragrap */}
 <div id="para-div">
 <p id="para1">
 Front-end developers turn static designs into engaging digital experiences, mastering HTML, CSS, and JavaScript to create responsive, interactive interfaces. Their expertise ensures that websites not only look stunning but also perform seamlessly across all devices..</p>
 </div>

<div id="button-styleing">
{/* <Button text="Github" className="btn" /> 
<Button text="Linkdin" className="btn" /> */}
<input type="text" name="" id="text-input" placeholder="Email address" />
<Button text="Get Started" className="hero-btn" />

</div>
<div id="section-of-icon">
<p id="para-with-icon">scroll</p>
<svg className=" con h-1 w-1 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
</svg>

</div>




    </div>
  )
}

export default Hero