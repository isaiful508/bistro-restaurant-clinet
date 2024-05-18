import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img from '../../../assets/home/slide1.jpg'

const ChefRemmends = () => {
    return (
        <div>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="Should Try"
            ></SectionTitle>


            <div className="flex justify-center  gap-10 mb-20">

                <div className="max-w-xs rounded-md bg-[#F3F3F3] dark:bg-gray-50 dark:text-gray-800">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">

                            <h2 className="text-3xl inter-600">Caeser Salad</h2>

                            <p className="dark:text-gray-800 inter-400">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

                        </div>

                        <button  className="flex text-[#BB8506] btn uppercase items-center justify-center w-full p-3 inter-400 tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">add to cart</button>
                    </div>
                </div>

                <div className="max-w-xs rounded-md bg-[#F3F3F3] dark:bg-gray-50 dark:text-gray-800">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">

                            <h2 className="text-3xl inter-600">Caeser Salad</h2>

                            <p className="dark:text-gray-800 inter-400">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

                        </div>

                        <button  className="flex text-[#BB8506] btn uppercase items-center justify-center w-full p-3 inter-400 tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">add to cart</button>
                    </div>
                </div>

                <div className="max-w-xs rounded-md bg-[#F3F3F3] dark:bg-gray-50 dark:text-gray-800">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">

                            <h2 className="text-3xl inter-600">Caeser Salad</h2>

                            <p className="dark:text-gray-800 inter-400">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

                        </div>

                        <button  className="flex text-[#BB8506] btn uppercase items-center justify-center w-full p-3 inter-400 tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">add to cart</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ChefRemmends;