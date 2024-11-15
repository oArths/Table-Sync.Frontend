import { RootState } from "../rootReducer";

export const simplifiedResponseSelector = (state: RootState) => {
  let response = state.response.response;

  return response.map((Item) => ({
    id: Item.id,
    processNumber: Item.process.processNumber,
    clientNumber: Item.client.clientNumber,
    status: Item.client.status,
    tenant: Item.client.tenant,
    lastMovement: Item.process.lastMovement,
    contractEnd: Item.contracts.contractEnd,
    phase: Item.procedural.phase,
    cnpj: Item.client.cnpj,
  }));
};

export const getContractSelector = (state: RootState, id: string) => {
  const item = state.response.response.find((item) => item.id === id);
  console.log(item)
  const exist = item ? item : null;
  return exist;
};
