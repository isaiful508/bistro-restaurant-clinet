import FoodCard from "../../../components/FoodCard/FoodCard";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result;
}

const OrderTab = ({ item }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // Chunk the items into arrays of 6 items each
    const chunkedItems = chunkArray(item, 6);

    return (
        <>
            
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    chunkedItems.map((chunk, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid mt-8 md:grid-cols-3 gap-10'>
                                {
                                    chunk.map(item => (
                                        <FoodCard
                                            key={item._id}
                                            item={item}
                                        />
                                    ))
                                }
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>


    );
};

export default OrderTab;
