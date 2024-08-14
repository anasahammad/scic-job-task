import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";


const Home = () => {
    return (
        <div className="p-8">
            <Container>
                <div>
                    <HomeBanner/>
                </div>
            </Container>
        </div>
    );
};

export default Home;