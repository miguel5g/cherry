import { CommandIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CreateSessionForm } from '@/components/forms/create-session-form';
import { Button } from '@/components/ui/button';

function SignIn() {
  return (
    <div className="flex min-h-screen">
      <section className="flex flex-col w-1/2 p-8 border-r bg-muted border-border">
        <div className="flex items-center gap-2 text-2xl">
          <CommandIcon />
          <p>Pineapple</p>
        </div>

        <blockquote className="mt-auto space-y-2">
          <p className="text-lg">
            &ldquo;This library has saved me countless hours of work and helped me deliver stunning
            designs to my clients faster than ever before.&rdquo;
          </p>
          <footer className="text-sm">Sofia Davis</footer>
        </blockquote>
      </section>

      <section className="flex items-center justify-center w-1/2 p-8">
        <div className="flex flex-col max-w-md">
          <h1 className="text-2xl font-semibold tracking-tight text-center">Acessar sua conta</h1>
          <p className="mb-8 text-sm text-center text-muted-foreground">
            Insira seus dados abaixo para acessar sua conta
          </p>

          <CreateSessionForm />

          <Button type="button" className="mt-2" variant="outline" asChild>
            <Link to="/sign-up">Não tem uma conta? Crie uma aqui</Link>
          </Button>

          <p className="px-8 mt-8 text-sm text-center text-muted-foreground">
            Ao clicar em continuar vocês está aceitando nossos{' '}
            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
              Termos de serviço
            </Link>{' '}
            e{' '}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
              Política de privacidade
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

export { SignIn };
