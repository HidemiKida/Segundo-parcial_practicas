

export class ClienteEntity {
  constructor(
    public id: number,
    public nombre: string | null,
    public identificacion: string,
    public estado: string = "PASIVO"
  ) {}

  public static fromObject(object: { [key: string]: any }): ClienteEntity {
    const { id, nombre, identificacion, estado } = object;

    if (!id) throw 'Id is required';
    if (!identificacion) throw 'Identificacion is required';

    let newEstado = estado ?? "PASIVO";
    if (newEstado !== "PASIVO" && newEstado !== "ACTIVO") {
      throw 'Estado must be either "PASIVO" or "ACTIVO"';
    }

    return new ClienteEntity(id, nombre ?? null, identificacion, newEstado);
  }
}

  
  
  