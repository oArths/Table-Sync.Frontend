import { z } from "zod";



const ClientSchema = z.object({
  tenant: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .min(1, { message: "O Campo é obrigatório" })
    .max(200, { message: "O valor é muito grande" }),
  cnpj: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((doc) => doc.replace(/\D/g, "").length === 14, {
      message: "CNPJ deve conter 14 números",
    }),
  clientNumber: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .min(3, { message: "O Número do Cliente é obrigatório" })
    .max(6, { message: "O valor é muito grande" }),
  status: z.string({
    required_error: "O campo é obrigatória.",
  }),
  inclusionInLegalControl: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((doc) => doc.replace(/\D/g, "").length === 8, { message: "Data inválida " }),
  kaDate: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((doc) => doc.replace(/\D/g, "").length === 8, { message: "Data inválida  ", }),
});

const ContractsSchema = z.object({
  supplier: z
    .string()
    .min(1, { message: "O Fornecedor é obrigatório" })
    .max(200),
  overdueAmount: z.string().refine((value) => /^[0-9.,]+$/.test(value), {
    message: "O valor deve conter apenas números",
  }),
  fo: z.string(),
  contractEnd: z
    .string()
    .refine((doc) => doc.replace(/\D/g, "").length === 8, { message: "Data inválida ou no futuro" }),
});

const CostsAndValuesSchema = z.object({
  initialCourtCosts: z.string().refine((value) => /^[0-9.,]+$/.test(value), {
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
  judicialRecovery: z.string({
    required_error: "O campo é obrigatória.",
  }),
  sentence: z.string({
    required_error: "O campo é obrigatória.",
  }),
  sentenceType: z.string({
    required_error: "O campo é obrigatória.",
  }),
  proceduralSituation: z.string({
    required_error: "O campo é obrigatória.",
  }),
  amountReceivedPaidToGrenke: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((value) => /^[0-9.,]+$/.test(value)),
  amountPaidByGrenke: z.string().refine((value) => /^[0-9.,]+$/.test(value)),
  phase: z.string(),
  frContact: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .min(1, { message: "O campo é obrigatória." })
    .max(500),
});

const ProcessSchema = z.object({
  processNumber: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((doc) => doc.replace(/\D/g, "").length === 20, {
      message: "Número inválido",
    }),
  newProcessNumber: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((doc) => doc.replace(/\D/g, "").length === 10, {
      message: "Número inválido",
    }),
  agreementMade: z.string({
    required_error: "O campo é obrigatória.",
  }),
  causeValue: z.string().refine((value) => /^[0-9.,]+$/.test(value)),
  lastMovement: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .refine((doc) => doc.replace(/\D/g, "").length === 8, { message: "Data inválida" }),
  citation: z.string(),
  frLastActionOrMeasures: z
    .string({
      required_error: "O campo é obrigatória.",
    })
    .min(1)
    .max(500),
});

export const ContractsContentSchema = z.object({
  client: ClientSchema,
  contracts: ContractsSchema,
  costsAndValues: CostsAndValuesSchema,
  procedural: ProceduralSchema,
  process: ProcessSchema,
});

export type ContractsContentSchema = z.infer<typeof ContractsContentSchema>;
