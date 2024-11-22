"use client";
import { Header } from "@/app/template/header";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/app/components/button";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";
import ContratoView from "@/app/template/contrato/contratoView";
import ContratoEdit from "@/app/template/contrato/contratoEdit";
import { getContractSelector } from "@/redux/response/responseSelects";
import { useState, useEffect } from "react";
import { Root } from "@/app/data/response.d";
import response from "../../../data/response.json";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContractsContentSchema } from "@/app/template/card/edit/cliente/zodValidation";

export default function Contrato() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  // const [selectedItem, setSelectedItem] = useState<Root | null>(null);

  // const item = useSelector((state: RootState) =>
  //   getContractSelector(state, params.id)
  // );

  // useEffect(() => {
  //   setSelectedItem(item);
  // }, [item]);
  // console.log(item);
  const selectedItem = response[1];
  const [editing, setEditing] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ContractsContentSchema>({
    defaultValues: {
      client: {
        tenant: selectedItem.client.tenant,
        cnpj: selectedItem.client.cnpj,
        clientNumber: selectedItem.client.clientNumber.toString(),
        status: selectedItem.client.status,
        inclusionInLegalControl: selectedItem.client.inclusionInLegalControl,
        kaDate: selectedItem.client.kaDate,
      },
      contracts: {
        supplier: selectedItem.contracts.supplier,
        overdueAmount: selectedItem.contracts.overdueAmount,
        fo: selectedItem.contracts.fo,
        contractEnd: selectedItem.contracts.contractEnd,
      },
      costsAndValues: {
        initialCourtCosts: selectedItem.costsAndValues.initialCourtCosts,
        initialEnforcementAmount:
          selectedItem.costsAndValues.initialEnforcementAmount,
        historicalAmountOrSentence:
          selectedItem.costsAndValues.historicalAmountOrSentence,
        otherCourtCosts: selectedItem.costsAndValues.otherCourtCosts,
        gcPaidCosts: selectedItem.costsAndValues.gcPaidCosts,
      },
      procedural: {
        judicialRecovery: selectedItem.procedural.judicialRecovery,
        sentence: selectedItem.procedural.sentence.sentence,
        sentenceType: selectedItem.procedural.sentence.sentenceType,
        proceduralSituation:
          selectedItem.procedural.sentence.proceduralSituation,
        amountReceivedPaidToGrenke:
          selectedItem.procedural.amountReceivedPaidToGrenke,
        amountPaidByGrenke: selectedItem.procedural.amountPaidByGrenke,
        phase: selectedItem.procedural.phase,
        frContact: selectedItem.procedural.frContact,
      },
      process: {
        processNumber: selectedItem.process.processNumber,
        newProcessNumber: selectedItem.process.newProcessNumber,
        agreementMade: selectedItem.process.agreementMade,
        causeValue: selectedItem.process.causeValue,
        lastMovement: selectedItem.process.lastMovement,
        citation: selectedItem.process.citation,
        frLastActionOrMeasures: selectedItem.process.frLastActionOrMeasures,
      },
    },
    resolver: zodResolver(ContractsContentSchema),
  });
  const onSubmit: SubmitHandler<ContractsContentSchema> = (data) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <main className=" flex-col  w-full h-screen-minus-80   pb-20 items-start bg-primary100 justify-items-center text-white">
      <Header />
      <form
        className="flex flex-col items-start w-11/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start w-full mt-5 mb-10">
          <span className="flex flex-row items-start justify-start gap-2 w-full select-none">
            <p
              onClick={() => router.push("/home")}
              className="text-white font-light text-sm cursor-pointer"
            >
              Home
            </p>
            <p className="text-gray400 font-light text-sm cursor-default">
              {"/"}
            </p>
            <p
              onClick={() => setEditing(false)}
              className={`font-light text-sm ${editing ? "cursor-pointer text-white " : "text-gray400 cursor-default " } `}
            >
              Contrato
            </p>
            {editing && <>
              <p className="text-gray400 font-light text-sm cursor-default">
              {"/"}
            </p>
            <p className="text-gray400 font-light text-sm cursor-pointer">
              Editando
            </p>
            </>}
          </span>
          <nav className="flex flex-row items-center justify-between w-full mt-5">
            <p className="text-white font-medium text-3xl ">
              {selectedItem?.process.processNumber
                ? editing ?  `Editando ${selectedItem.process.processNumber}` :  `Contrato ${selectedItem.process.processNumber}`
                : "Contrato não encontrado"}
            </p>
            {editing ? (
              <Button
                title="Salvar"
                type="submit"
                onClick={() => setEditing(false)}
                className="bg-green200/70 w-36 h-10  "
                loading={false}
              />
            ) : (
              <Button
                title="Editar"
                type="button"
                onClick={() => setEditing(true)}
                className="bg-blue200 w-36 h-10  "
                loading={false}
              />
            )}
          </nav>
        </div>

        {editing ? (
          <ContratoEdit
            Contracts={selectedItem}
            register={register}
            control={control}
            setValue={setValue}
            getValues={getValues}
            errors={errors}
          />
        ) : (
          <ContratoView Contracts={selectedItem} />
        )}

        {!selectedItem && <>Dados do contrato não encontrado..</>}
      </form>
    </main>
  );
}
