export class GastoEntity {
    constructor(
      public id: number,
      public clienteId: number,
      public conceptoId: number,
      public fecha: Date,
      public hora: string,
      public valorgasto: number,
      public estado: string = "PASIVO"
    ) {}
  
    public static fromObject(object: { [key: string]: any }): GastoEntity {
      const { id, clienteId, conceptoId, fecha, hora, valorgasto, estado } = object;
  
      if (!id) throw 'Id is required';
      if (!clienteId) throw 'ClienteId is required';
      if (!conceptoId) throw 'ConceptoId is required';
      if (!fecha) throw 'Fecha is required';
      if (!hora) throw 'Hora is required';
      if (!valorgasto) throw 'ValorGasto is required';
  
      let newEstado = estado ?? "PASIVO";
      if (newEstado !== "PASIVO" && newEstado !== "ACTIVO") {
        throw 'Estado must be either "PASIVO" or "ACTIVO"';
      }
  
      return new GastoEntity(id, clienteId, conceptoId, new Date(fecha), hora, valorgasto, newEstado);
    }
  }
  