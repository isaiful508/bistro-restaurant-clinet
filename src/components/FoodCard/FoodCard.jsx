import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";


import UseAxiosSecure from './../../hooks/UseAxiosSecure';
import UseCart from "../../hooks/UseCart";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCart();




    const handleAddToCart = () => {
        if (user && user.email) {
            //sent data to db
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `${name} has been added`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update the cart items count
                        refetch();
                    }
                });

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login First",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="max-w-xs rounded-md bg-[#F3F3F3] dark:bg-gray-50 dark:text-gray-800 ">

            <div>
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 relative" />
                <p className="bg-[#111827] rounded-md text-white absolute px-2 -mt-72">{price} $</p>
            </div>

            <div className="flex flex-col justify-between p-6 space-y-8">

                <div className="space-y-2">

                    <h2 className="text-2xl text-center inter-600">{name}</h2>

                    <p className="dark:text-gray-800 inter-400">{recipe}</p>
                   

                </div>

                <button
                    onClick={handleAddToCart}
                    className="btn  btn-outline border-0 border-b-4 mt-4 border-[#BB8506] text-[#BB8506] uppercase">add to cart</button>

            </div>

        </div>

    );
};

export default FoodCard;