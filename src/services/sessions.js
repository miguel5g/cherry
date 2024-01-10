import { api } from '@/libs/api';

async function createSession({ password, username }) {
  try {
    const { data } = await api.post('/sessions', {
      password,
      username,
    });

    return data.id;
  } catch (error) {
    let message = 'Algo deu errado...';

    if (error.response?.data?.error === 'User not found') {
      message = 'Usuário não encontrado';
    }

    if (error.response?.data?.error === 'Wrong password') {
      message = 'Senha incorreta';
    }

    throw new Error(message);
  }
}

export { createSession };
