import { RootState } from "../rootReducer";
import { createSelector } from "@reduxjs/toolkit";

export const simplifiedResponseSelector = createSelector(
  [(state: RootState) => state.data.response],
  (response) => {
    if (response && Array.isArray(response)) {
      return response.map((Item) => ({
        id: Item.id,
        processNumber: Item.process.processNumber,
        clientNumber: Item.client.clientNumber,
        status: Item.client.status,
        tenant: Item.client.tenant,
        lastMovement: Item.process.lastMovement,
        contractEnd: Item.contracts.contractEnd,
        phase: Item.procedural.phase,
      }));
    }
    return null;
  }
);

export const getContractSelector = createSelector(
  [(state: RootState) => state.data.response, (_, id: string) => id],
  (response, id) => {
    if (response) {
      return response.find((item) => item.id === id) || null;
    }
    return null;
  }
);
