import { z } from "zod";

export const ContractsContent = z.object({
  tenant: z
    .string()
    .min(1, { message: "O Locatatio é obrigatorio" })
    .max(200, { message: "o Nome é muito grande, passou de 200 caracteres" }),
  cnpj: z
    .string({
      required_error: "CNPJ é obrigatório.",
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length === 14;
    }, "CNPJ deve conter exatamente 14 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return !!Number(replacedDoc);
    }, "CNPJ deve conter apenas números."),
  clientNumber: z
    .string()
    .min(3, { message: "O Número do Cliente é obrigatorio" })
    .max(6, { message: "O Número do Cliente , passou de 6 caracteres" }),
  inclusionInLegalControl: z
    .string({
      required_error: "Data é obrigatória.",
    })
    .refine((date) => !isNaN(Date.parse(date)), "Data inválida.")
    .refine(
      (date) => new Date(date) <= new Date(),
      "Data não pode ser no futuro."
    ),
  kaDate: z
    .string({
      required_error: "Data é obrigatória.",
    })
    .refine((date) => !isNaN(Date.parse(date)), "Data inválida.")
    .refine(
      (date) => new Date(date) <= new Date(),
      "Data não pode ser no futuro."
    ),
    status: z.string(),
    supplier: z
    .string()
    .min(1, { message: "O Fornecedor é obrigatorio" })
    .max(200, { message: "o Nome é muito grande, passou de 200 caracteres" }),
    overdueAmount: z
    .string()
    .min(1, { message: "O Fornecedor é obrigatorio" })
    .max(200, { message: "o Nome é muito grande, passou de 200 caracteres" }),
});

export type ContractsContent = z.infer<typeof ContractsContent>;
