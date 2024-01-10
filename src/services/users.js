import { api } from '@/libs/api';

async function createUser({ display, email, password, username }) {
  try {
    const { data } = await api.post('/users', {
      display,
      email,
      password,
      username,
    });

    return data.id;
  } catch (error) {
    let message = 'Algo deu errado...';

    if (error.response?.data?.error === 'Username already exists') {
      message = 'Nome de usuário já existe';
    }

    if (error.response?.data?.error === 'Email already exists') {
      message = 'E-mail já existe';
    }

    throw new Error(message);
  }
}

export { createUser };
