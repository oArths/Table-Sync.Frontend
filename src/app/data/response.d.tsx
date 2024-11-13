export interface Data {
  data : Root[]
}

export interface Root {
    Cliente: Cliente
    Contratos: Contratos
    "Custas e Valores": CustasEValores
    Processuais: Processuais
    Processo: Processo
  }
  
  export interface Cliente {
    Locatatio: string
    CNPJ: string
    "Número do Cliente": number
    Status: string
    "Inclusão na Legal Control": string
    "Data KA": string
  }
  
  export interface Contratos {
    Fornecedor: string
    "Valor inadimplido": string
    Fo: string
    "Fim do contrato": string
  }
  
  export interface CustasEValores {
    "Valor das custas iniciais": string
    "Valor inicial do cumprimento": string
    "Valor histórico/Sentença": string
    "Valor de outras custas": string
    "Custas pagas GC": string
  }
  
  export interface Processuais {
    "Recuperação judicial": string
    Sentença: Sentena
    "Valor recebido (pago à Grenke)": string
    "Valor pago pela Grenke": string
    Fase: string
    "Contato FR": string
  }
  
  export interface Sentena {
    Sentença: string
    "Tipo de Sentença": string
    "Situação Processual": string
  }
  
  export interface Processo {
    "Número do Processo": string
    "Novo número de processo": string
    "Acordo Realizado": string
    "Valor da Causa": string
    "Última movimentação": string
    Citação: string
    "FR Último Andamento/Providências": string
  }
  