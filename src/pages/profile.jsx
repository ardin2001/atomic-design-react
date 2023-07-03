import useAuth from "../hooks/useAuth";

const ProfilePage =() =>{
    const username = useAuth("");
    return(
        <h1>Profile Page Auth</h1>
    )
}

export default ProfilePage;