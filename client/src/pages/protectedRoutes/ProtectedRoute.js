import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast'


const ProtectedRoute = ({children}) => {

    const {user} = useSelector((store) => store.user)

    if(!user){

        toast.error('You should logged in to access the requested page');

        return <Navigate to='/login' />
    }

      return children;
}
export default ProtectedRoute;
