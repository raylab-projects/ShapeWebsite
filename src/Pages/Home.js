import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <Hero/>
            <Cards/>
            {/* <a href="#Navbar"><button className="hearme" transition= {3}>Hear me</button></a> */}
        </div>
    )
}