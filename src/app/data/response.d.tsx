export type Data = Root[];

export type TableType = Table[];

export interface Table {
  id: string;
  processNumber: string;
  clientNumber: number;
  status: string;
  tenant: string;
  lastMovement: string;
  contractEnd: string;
  phase: string;
}
export type RootObject = Root;

export interface Root {
  id: string;
  client: Client;
  contracts: Contracts;
  costsAndValues: CostsAndValues;
  procedural: Procedural;
  process: Process;
}

export interface Client {
  tenant: string;
  cnpj: string;
  clientNumber: number;
  status: string;
  inclusionInLegalControl: string;
  kaDate: string;
}

export interface Contracts {
  supplier: string;
  overdueAmount: string;
  fo: string;
  contractEnd: string;
}

export interface CostsAndValues {
  initialCourtCosts: string;
  initialEnforcementAmount: string;
  historicalAmountOrSentence: string;
  otherCourtCosts: string;
  gcPaidCosts: string;
}

export interface Procedural {
  judicialRecovery: string;
  sentence: Sentence;
  amountReceivedPaidToGrenke: string;
  amountPaidByGrenke: string;
  phase: string;
  frContact: string;
}

export interface Sentence {
  sentence: string;
  sentenceType: string;
  proceduralSituation: string;
}

export interface Process {
  processNumber: string;
  newProcessNumber: string;
  agreementMade: string;
  causeValue: string;
  lastMovement: string;
  citation: string;
  frLastActionOrMeasures: string;
}
