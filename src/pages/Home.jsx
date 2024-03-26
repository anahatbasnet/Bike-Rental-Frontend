import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

export default function Home(){
    return(
        <div>
        
        <div className="screensize max-w-7xl ml-32 mr-32 space-y-8">
          <Carousel />
          <Cards />
        </div>
      </div>
    )
}