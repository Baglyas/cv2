import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSlice, User } from "../features/userSlice";

const Profile = () => {
  const user: User = useSelector((state: { user: User }) => state.user);
  return <div>
    {user.name}
    {user.age.toString()}
    {user.contacts.email}
    {user.contacts.address}
    {user.contacts.phone?.toString()}
  </div>;
};

export default Profile;
