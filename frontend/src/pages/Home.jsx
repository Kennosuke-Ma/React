import { Link } from "react-router-dom";
import SamplePage from "./SamplePage";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to='/samplePage'>SamplePage</Link>
            <br></br>
            <SamplePage></SamplePage>
        </>
    )
}


export default Home;