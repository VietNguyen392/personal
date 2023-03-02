import { POST, GET, DELETE } from '../utils/method';
import { routes } from '../utils/routes';
export const getUserProfile = async () => {
  return await GET(routes.api.profile);
};
export const loginUser=async(data:{email:string,password:string})=>{
  return await POST(routes.api.login,data)
}