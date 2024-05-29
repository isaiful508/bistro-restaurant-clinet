import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from './../../../hooks/UseAxiosSecure';
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
           
            return res.data;
        }
    })

    //make admin a user
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then((res) => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${user.name} is now admin`)
                }
            })
    }









    //delete user


    const handleDeleteUser = id => {
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

                axiosSecure.delete(`/users/${id}`)
                    .then((res) => {
                        console.log(res.data);
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
                heading="MANAGE ALL USERS"
                subHeading="How many??"
            ></SectionTitle>

            <div className="flex  gap-4 cinzel-700">
                <h2 className="text-4xl">Total Users : {users.length}</h2>

            </div>

            <div className="overflow-x-auto mt-10 rounded-t-lg">

                <table className="table">
                    {/* head */}
                    <thead className="inter-600 bg-[#D1A054] text-white">
                        <tr>
                            <th>No.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>

                    </thead>

                    <tbody className="inter-400">

                        {
                            users.map((user, idx) => <tr
                                key={user._id}
                            >

                                <td>
                                    {idx + 1}
                                </td>

                                <td>
                                    {user.name}
                                </td>

                                <td>
                                    {user.email}
                                </td>
                                <td>

                                   { user.role === 'admin'? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn text-white bg-[#D1A054]">
                                        <FaUsers></FaUsers>
                                    </button>}

                                </td>

                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-xs"> <MdDelete className="text-xl text-red-600" /></button>
                                </th>

                            </tr>)
                        }



                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllUsers;