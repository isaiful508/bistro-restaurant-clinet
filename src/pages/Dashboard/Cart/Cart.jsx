import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseCart from "../../../hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from './../../../hooks/UseAxiosSecure';
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = UseCart();
    // console.log(cart)
    const axiosSecure = UseAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then((res) => {
                        // console.log(res.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    })
            }
        });

    }
    return (
        <div>
            <SectionTitle
                heading="WANNA ADD MORE?"
                subHeading="My Cart"
            >

            </SectionTitle>

            <div className="flex justify-around items-center gap-4 cinzel-700">
                <h2 className="text-4xl">Total Orders : {cart.length}</h2>
                <h2 className="text-4xl">Total Price : $ {totalPrice}</h2>

                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn bg-[#D1A054]">Pay</button>
                </Link> :
                    <button disabled className="btn bg-[#D1A054]">Pay</button>
                }
            </div>

            {/* Order table */}
            <div className="overflow-x-auto mt-10 rounded-t-lg">

                <table className="table">
                    {/* head */}
                    <thead className="inter-600 bg-[#D1A054] text-white">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody className="inter-400">

                        {
                            cart.map((item, idx) => <tr
                                key={item._id}
                            >

                                <th>
                                    {idx + 1}
                                </th>

                                <td>

                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="food_img" />
                                            </div>
                                        </div>

                                    </div>

                                </td>

                                <td>
                                    {item.name}
                                </td>
                                <td> $ {item.price}</td>

                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><MdDelete className="text-xl text-red-600" /></button>
                                </th>

                            </tr>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Cart;