import { z } from "zod";
const isBrazilianDate = (date : any) => {
  const [day, month, year] = date.split("/").map(Number);
  
  if (
    !day || !month || !year ||
    day < 1 || day > 31 || 
    month < 1 || month > 12 || 
    year < 1000 || year > 9999
  ) {
    return false;
  }

  const isoDate = new Date(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`);
    return !isNaN(isoDate.getTime()) && isoDate <= new Date();
};

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
  .refine(isBrazilianDate, "Data inválida ou não pode ser no futuro."),
  kaDate: z
  .string({
    required_error: "Data é obrigatória.",
  })
  .refine(isBrazilianDate, "Data inválida ou não pode ser no futuro."),
    contractEnd: z
    .string({
      required_error: "Data é obrigatória.",
    })
    .refine(isBrazilianDate, "Data inválida ou não pode ser no futuro."),
    status: z.string(),
    fo: z.string(),
    supplier: z
    .string()
    .min(1, { message: "O Fornecedor é obrigatorio" })
    .max(200, { message: "o Nome é muito grande, passou de 200 caracteres" }),
    overdueAmount: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números.",
    })
    // .transform((value) => value.replace(/\D/g, "")) 
    .refine((value) => value.length > 0, {
      message: "O valor é obrigatório e não pode ser vazio.",
    })
    .refine((value) => value.length <= 50, {
      message: "O Valor é muito grande, passou de 50 caracteres",
    }),
    initialCourtCosts: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números.",
    })
    // .transform((value) => value.replace(/\D/g, "")) 
    .refine((value) => value.length > 0, {
      message: "O valor é obrigatório e não pode ser vazio.",
    })
    .refine((value) => value.length <= 50, {
      message: "O Valor é muito grande, passou de 50 caracteres",
    }),
    initialEnforcementAmount: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números.",
    })
    // .transform((value) => value.replace(/\D/g, "")) 
    .refine((value) => value.length > 0, {
      message: "O valor é obrigatório e não pode ser vazio.",
    })
    .refine((value) => value.length <= 50, {
      message: "O Valor é muito grande, passou de 50 caracteres",
    }),
    historicalAmountOrSentence: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números.",
    })
    // .transform((value) => value.replace(/\D/g, "")) 
    .refine((value) => value.length > 0, {
      message: "O valor é obrigatório e não pode ser vazio.",
    })
    .refine((value) => value.length <= 50, {
      message: "O Valor é muito grande, passou de 50 caracteres",
    }),
    otherCourtCosts: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números.",
    })
    // .transform((value) => value.replace(/\D/g, "")) 
    .refine((value) => value.length > 0, {
      message: "O valor é obrigatório e não pode ser vazio.",
    })
    .refine((value) => value.length <= 50, {
      message: "O Valor é muito grande, passou de 50 caracteres",
    }),
    gcPaidCosts: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números.",
    })
    // .transform((value) => value.replace(/\D/g, "")) 
    .refine((value) => value.length > 0, {
      message: "O valor é obrigatório e não pode ser vazio.",
    })
    .refine((value) => value.length <= 50, {
      message: "O Valor é muito grande, passou de 50 caracteres",
    }),
    
    
});

export type ContractsContent = z.infer<typeof ContractsContent>;
