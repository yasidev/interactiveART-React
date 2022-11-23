import Comments from "./Comments";
import Portfolio from "./Portfolio";
import Works from "./Works";

export default function Main(){
    return(
      <main className="main">
        <Works/>
        <Comments/>
        <Portfolio/>
      </main>
    )
}