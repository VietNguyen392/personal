import { POST, GET, DELETE } from '../utils/method';
import { routes } from '../utils/routes';
export const getUserProfile = async () => {
  return await GET(routes.api.profile);
};
