import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppShell, Button} from '@mantine/core';
import AppHeader from './Header';
import { IconArrowLeft } from '@tabler/icons-react';
import LoginPage from '../../pages/login';
const AppLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname
  return (
    <>
      {
        path === '/login' ? <LoginPage/> :
          <AppShell
            padding="md"
            navbar={<AppHeader />}
          >
            <Button variant='outline' onClick={() => navigate(-1)} leftIcon={<IconArrowLeft />}>
              BACK
            </Button>
            {children}
        
          </AppShell>
      }
    </>
  );
};

export default AppLayout;