import { z } from 'zod';

const displaySchema = z
  .string()
  .min(1, { message: 'Mínimo de 1 caractere' })
  .max(64, { message: 'Máximo de 64 caracteres' });

const usernameSchema = z
  .string()
  .min(3, { message: 'Mínimo de 3 caracteres' })
  .max(64, { message: 'Máximo de 64 caracteres' })
  .regex(/^[a-zA-Z0-9_]+$/, { message: 'Apenas letras, números e _' });

const emailSchema = z.string().email({ message: 'E-mail inválido' });

const passwordSchema = z
  .string()
  .min(8, { message: 'Mínimo de 8 caracteres' })
  .max(32, { message: 'Máximo de 32 caracteres' });

export { displaySchema, usernameSchema, emailSchema, passwordSchema };
