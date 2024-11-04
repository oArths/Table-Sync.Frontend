import { z } from "zod";

export const UserContent = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatorio" })
    .email({ message: "Email é obrigatório e deve ser válido" }),
  password: z
    .string()
    .min(1, { message: "A senha é obrigatoria" })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
    .max(100, {
      message: "A mensagem é muito grande, passou de 100 caracteres",
    }),
});

export type UserContent = z.infer<typeof UserContent>;