import React from "react";

const UserData=({users})=>{
 return(
    <>
        {
            users.map((item)=>{
                const{id,name,email}=item;
                const{street,city}=item.address

                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{street} & {city}</td>
                    </tr>
                )
            })
        }
    </>
 )
}


export default UserData;