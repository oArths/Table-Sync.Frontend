import { z } from "zod";

const isBrazilianDate = (date: any) => {
  const [day, month, year] = date.split("/").map(Number);
  if (
    !day ||
    !month ||
    !year ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1000 ||
    year > 9999
  ) {
    return false;
  }

  const isoDate = new Date(
    `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  );
  return !isNaN(isoDate.getTime()) && isoDate <= new Date();
};

const ClientSchema = z.object({
  tenant: z
    .string()
    .min(1, { message: "O Locatário é obrigatório" })
    .max(200, { message: "O Nome é muito grande" }),
  cnpj: z
    .string()
    .refine((doc) => doc.replace(/\D/g, "").length === 14, {
      message: "CNPJ deve conter 14 números",
    }),
  clientNumber: z
    .string()
    .min(3, { message: "O Número do Cliente é obrigatório" })
    .max(6),
  status: z.string(),
  inclusionInLegalControl: z
    .string()
    .refine(isBrazilianDate, { message: "Data inválida ou no futuro" }),
  kaDate: z
    .string()
    .refine(isBrazilianDate, { message: "Data inválida ou no futuro" }),
});

const ContractsSchema = z.object({
  supplier: z
    .string()
    .min(1, { message: "O Fornecedor é obrigatório" })
    .max(200),
  overdueAmount: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "O valor deve conter apenas números",
    }),
  fo: z.string(),
  contractEnd: z
    .string()
    .refine(isBrazilianDate, { message: "Data inválida ou no futuro" }),
});

const CostsAndValuesSchema = z.object({
  initialCourtCosts: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "Apenas números são permitidos",
    }),
  initialEnforcementAmount: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value), {
      message: "Apenas números são permitidos",
    }),
  historicalAmountOrSentence: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value)),
  otherCourtCosts: z.string().refine((value) => /^[0-9.,]+$/.test(value)),
  gcPaidCosts: z.string().refine((value) => /^[0-9.,]+$/.test(value)),
});

const ProceduralSchema = z.object({
  judicialRecovery: z.string(),
  sentence: z.string(),
  sentenceType: z.string(),
  proceduralSituation: z.string(),
  amountReceivedPaidToGrenke: z
    .string()
    .refine((value) => /^[0-9.,]+$/.test(value)),
  amountPaidByGrenke: z.string().refine((value) => /^[0-9.,]+$/.test(value)),
  phase: z.string(),
  frContact: z.string().min(1).max(500),
});

const ProcessSchema = z.object({
  processNumber: z
    .string()
    .refine((doc) => doc.replace(/\D/g, "").length === 20, {
      message: "Número inválido",
    }),
  newProcessNumber: z
    .string()
    .refine((doc) => doc.replace(/\D/g, "").length === 10, {
      message: "Número inválido",
    }),
  agreementMade: z.string(),
  causeValue: z.string().refine((value) => /^[0-9.,]+$/.test(value)),
  lastMovement: z
    .string()
    .refine(isBrazilianDate, { message: "Data inválida" }),
  citation: z.string(),
  frLastActionOrMeasures: z.string().min(1).max(500),
});

export const ContractsContentSchema = z.object({
  client: ClientSchema,
  contracts: ContractsSchema,
  costsAndValues: CostsAndValuesSchema,
  procedural: ProceduralSchema,
  process: ProcessSchema,
});

export type ContractsContentSchema = z.infer<typeof ContractsContentSchema>;
