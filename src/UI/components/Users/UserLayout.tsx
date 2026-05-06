import { Outlet } from "react-router-dom"
import UserHeader from "./UserHeader"
import UserFooter from "./UserFooter"
const UserLayout = () => {
    return (
        <>
        
            <UserHeader />
            <main className="main">
                <Outlet />
            </main>
            <UserFooter />
        </>
    )
}
export default UserLayout