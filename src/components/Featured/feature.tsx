import { cards } from "@/varaible"
import Link from "next/link"
import Image from "next/image"
import './feature.css'

const Feature = () => {
  return (
    <div id="featured-container" >
      <h2>creative Projects</h2>
      <div id="cards">
       
          {cards.map((card, idx) => {
            return <div key={idx} className="card-of-image-description ">
              <Link id="link" href={card.href}>
              <Image id="img" src={card.image} width={200} height={200} alt="card image" />
              </Link>

            </div>
          }) }
     
      </div>
    </div>
  )
}

export default Feature