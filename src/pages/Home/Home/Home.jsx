import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRemmends from "../ChefRecommends/ChefRemmends";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <ChefService></ChefService>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRemmends></ChefRemmends>
        <Featured></Featured>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;