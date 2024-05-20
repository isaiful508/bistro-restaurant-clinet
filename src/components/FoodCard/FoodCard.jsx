

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;


    return (
        <div className="max-w-xs rounded-md bg-[#F3F3F3] dark:bg-gray-50 dark:text-gray-800 ">

        <div>
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 relative" />
        <p className="bg-[#111827] rounded-md text-white absolute px-2 -mt-72">{price}</p>
        </div>

        <div className="flex flex-col justify-between p-6 space-y-8">

            <div className="space-y-2">

                <h2 className="text-2xl text-center inter-600">{name}</h2>

                <p className="dark:text-gray-800 inter-400">{recipe}</p>

            </div>

            <button  className="flex text-[#BB8506] btn uppercase items-center justify-center w-full p-3 inter-400 tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">add to cart</button>

        </div>

    </div>

    );
};

export default FoodCard;