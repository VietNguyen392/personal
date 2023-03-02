import React from 'react';
import {
  Header,
  Box,
  Image,
  Group,
  Avatar,
  HoverCard,
  UnstyledButton,
  Text,
  Divider,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
const Logo = require('../../images/brand.webp');

const { Target, Dropdown } = HoverCard;
const AppHeader = () => {

  return (
    <Box pb={100}>
      <Header height={63} sx={{ background: '#001f4d' }} px={'md'}>
        <Group position={'apart'} sx={{ height: '100%' }}>
          <Link to={routes.home}>
            <Image src={Logo} width={75} />
          </Link>
          <Group position={'left'}>
            <HoverCard>
              <Target>
                <Avatar radius={'xl'}>A</Avatar>
              </Target>
              <Dropdown sx={{ background: '#001f4d' }}>
                <Box>
                  <Group>
                    <Link to={routes.profile}>
                      <UnstyledButton
                        sx={{
                          display: 'block',
                          width: '100%',
                        }}
                      >
                        <Group>
                          <Avatar radius={'xl'}>A</Avatar>
                          <div style={{ flex: 1 }}>
                            <Text size={'sm'} weight={500} color={'#fff'}>
                              Admin
                            </Text>
                            <Text color={'dimmed'} size={'xs'}>
                              admin@email.com
                            </Text>
                          </div>
                        </Group>
                      </UnstyledButton>
                    </Link>
                  </Group>
                  <Divider my={'10px'} />
                  <Group>
                    <UnstyledButton sx={{ display: 'flex' }}>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#264675" />
                        <path
                          d="M27.6667 25.7083V22.5833H20.375V18.4167H27.6667V15.2917L32.875 20.5L27.6667 25.7083ZM25.5833 10.0833C26.1359 10.0833 26.6658 10.3028 27.0565 10.6935C27.4472 11.0842 27.6667 11.6141 27.6667 12.1667V14.25H25.5833V12.1667H16.2083V28.8333H25.5833V26.75H27.6667V28.8333C27.6667 29.3859 27.4472 29.9158 27.0565 30.3065C26.6658 30.6972 26.1359 30.9167 25.5833 30.9167H16.2083C15.6558 30.9167 15.1259 30.6972 14.7352 30.3065C14.3445 29.9158 14.125 29.3859 14.125 28.8333V12.1667C14.125 11.6141 14.3445 11.0842 14.7352 10.6935C15.1259 10.3028 15.6558 10.0833 16.2083 10.0833H25.5833Z"
                          fill="white"
                        />
                      </svg>
                      <Text size={'md'} color={'#fff'} mt={'7px'} ml={'7px'}>
                        Sign Out
                      </Text>
                    </UnstyledButton>
                  </Group>
                </Box>
              </Dropdown>
            </HoverCard>
          </Group>
        </Group>
      </Header>
    </Box>
  );
};

export default AppHeader;
