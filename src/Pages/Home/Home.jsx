import BookClub from "../../Components/BookClub/BookClub";
import Category from "../../Components/Category/Category";
import Banner from "../../Components/Headers/banner";
import Support from "../../Components/Support/Support";
import Container from "../../Components/Tools/Container";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Container>
        <Category></Category>
        <BookClub></BookClub>
        <Support></Support>
      </Container>
    </div>
  );
};

export default Home;
