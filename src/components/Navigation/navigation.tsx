import Link from "next/link";
// import { Menu } from "lucide-react";


import './navigation.css'

const Navigation = () => {
  return (
    <nav>
            <div id="link">
                <Link id="rizvi-name" href="/"
                   >

                    M.Abrar Rizvi <span id="rizvi" >.</span>

                </Link>
            </div>
            {/* After writing my name i am going to put navigation links */}
            <div id="links"  >
                <Link className="anchor" href="/">
                Portfolio.
                </Link >
                {/* second link of my story */}
                <Link className="anchor" href="/about" >
                About Us
                </Link>

                  {/* third link of contact */}
                  <Link className="anchor" href="contact">
                  Get in Touch
                  </Link>
            </div>
       
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          
          

        </nav>
  )
}

export default Navigation