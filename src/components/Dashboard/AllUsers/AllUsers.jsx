import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:8000/users/admin/${user?._id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${user.name} is Admin Succesfull`)
                    refetch();
                }
            })
    }

    const handleMakeSeller = user => {
        fetch(`http://localhost:8000/users/seller/${user?._id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${user.name} is seller Succesfull`)
                    refetch();
                }
            })
    }
    const handleDeleteUser = user => {
        const process = window.confirm('Do you want to delete this User?')
        if (process) {
            fetch(`http://localhost:8000/users/admin/${user?._id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`${user.name} Deleted`)
                        refetch()
                    }
                })
        }

    }

    return (
        <div>
        <h1 className='text-2xl mb-5'> See All Users: {users.length}</h1>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-[#E6E6E6]'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Add Role</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className='bg-base-100'>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role !== 'admin' ? <button onClick={() => { handleMakeAdmin(user) }} className="btn btn-sm btn-active btn-outline mr-4">Admin</button> : <p className='inline mr-6 ml-5'>admin</p>}
                            {user?.userRole !== 'seller' ? <button onClick={() => { handleMakeSeller(user) }} className="btn btn-sm  btn-outline ml-4">Seller</button> : <p className='inline ml-5 mr-6'>seller</p>}
                            
                            </td>
                            <td><button onClick={() => { handleDeleteUser(user) }} className="btn btn-sm btn-outline rounded-full btn-error ">x</button> </td>


                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;