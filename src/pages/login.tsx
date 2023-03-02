import React from 'react';
import {
  Group,
  TextInput,
  Checkbox,
  Paper,
  Container,
  Center,
  Title,
  PasswordInput,
  UnstyledButton,
} from '@mantine/core';
import { useForm,zodResolver } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons-react';
import { loginShema } from '../utils/validate';
const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate:zodResolver(loginShema)
  });
  const submitLogin = (data: {email:string,password:string}) => {
    console.log(data);
  };
  return (
    <Center className="login">
      <Paper
        withBorder
        py={20}
        component="form"
        sx={{ width: '405px' }}
        onSubmit={form.onSubmit(submitLogin)}
      >
        <Title align="center">Log In</Title>
        <Container mt={70}>
          <TextInput
            placeholder="Email"
            icon={<IconMail color="#001f4d" />}
            required
            variant="unstyled"
            width={471}
            radius={'md'}
            mb={20}
            sx={{
              boxShadow: '0px 4px 4px rgba(0, 31, 77, 0.25)',
              borderRadius: '10px',
            }}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            placeholder="Password"
            required
            icon={<IconLock color="#001f4d" />}
            variant="unstyled"
            width={471}
            radius={'md'}
            sx={{
              boxShadow: '0px 4px 4px rgba(0, 31, 77, 0.25)',
              borderRadius: '10px',
            }}
            {...form.getInputProps('password')}
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
          </Group>
          <UnstyledButton
            type="submit"
            mt="xl"
            sx={{
              width: '100%',
              textAlign: 'center',
              background: '#001f4d',
              height: '40px',
              color: 'white',
              borderRadius: '12px',
            }}
          >
            Log in
          </UnstyledButton>
        </Container>
      </Paper>
    </Center>
  );
};

export default LoginPage;
