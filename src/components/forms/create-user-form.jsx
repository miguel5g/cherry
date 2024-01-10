import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { displaySchema, emailSchema, passwordSchema, usernameSchema } from '@/libs/schemas';
import { createUser } from '@/services/users';

const formSchema = z
  .object({
    display: displaySchema,
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmation: passwordSchema,
  })
  .refine((data) => data.password === data.confirmation, {
    message: 'As senhas não coincidem',
    path: ['confirmation'],
  });

function CreateUserForm() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      display: '',
      username: '',
      email: '',
      password: '',
      confirmation: '',
    },
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
  });

  function onSubmit(values) {
    const promise = createUserMutation.mutateAsync(values).then(() => {
      navigate('/sign-in');
    });

    toast.promise(promise, {
      loading: 'Cadastrando usuário...',
      success: 'Usuário cadastrado com sucesso!',
      error: (error) => error.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="display"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de exibição</FormLabel>
              <FormControl>
                <Input placeholder="Miguel Ângelo" maxLength={64} {...field} />
              </FormControl>
              <FormDescription>Esse será o nome que será exibido</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de usuário</FormLabel>
              <FormControl>
                <Input placeholder="miguel5g" maxLength={64} {...field} />
              </FormControl>
              <FormDescription>Esse será seu nome único no Pineapple</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="miguel5g@mail.com" maxLength={92} {...field} />
              </FormControl>
              <FormDescription>Seu e-mail para contato</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" maxLength={32} {...field} />
              </FormControl>
              <FormDescription>Escolha uma senha forte</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmação de senha</FormLabel>
              <FormControl>
                <Input type="password" maxLength={32} {...field} />
              </FormControl>
              <FormDescription>Confirme sua senha</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-2" type="submit">
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}

export { CreateUserForm };
