import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

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
import { passwordSchema, usernameSchema } from '@/libs/schemas';
import { createSession } from '@/services/sessions';

const formSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

function CreateSessionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const createSessionMutation = useMutation({
    mutationFn: createSession,
  });

  function onSubmit(values) {
    const promise = createSessionMutation.mutateAsync(values).then(() => {
      // TODO: Redirecionar para a página de login
    });

    toast.promise(promise, {
      loading: 'Entrando...',
      success: 'Entrou com sucesso!',
      error: (error) => error.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
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

        <Button className="mt-2" type="submit">
          Acessar
        </Button>
      </form>
    </Form>
  );
}

export { CreateSessionForm };
