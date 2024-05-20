import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import '../../Home/Featured/Featured.css'

const Featured = () => {
    return (
        <div className="featured-items text-white my-20 pt-8 bg-fixed">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></SectionTitle>

            <div className="flex justify-center pb-20 pt-12 px-36 items-center gap-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>

                <div className="inter-400 ">
                    <p>March 20, 2023</p>
                    <h2 className="uppercase">Where can i get some? </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate. Velit ipsa libero eos itaque expedita consectetur! Totam provident tempore quas, atque officia natus, pariatur nisi quibusdam nesciunt illo magnam adipisci animi sapiente aliquid soluta architecto itaque sunt. Itaque, magni?</p>

                    
                </div>
            </div>
        </div>
    );
};

export default Featured;