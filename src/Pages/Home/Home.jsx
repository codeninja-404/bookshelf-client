import Category from "../../Components/Category/Category";
import Banner from "../../Components/Headers/banner";
import Container from "../../Components/Tools/Container";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Container>
        <Category></Category>
      </Container>
    </div>
  );
};

export default Home;
