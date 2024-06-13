
export class ConceptoEntity {
  constructor(
    public id: number,
    public descripcion: string,
    public estado: string = "PASIVO"
  ) {}

  public static fromObject(object: { [key: string]: any }): ConceptoEntity {
    const { id, descripcion, estado } = object;

    if (!id) throw 'Id is required';
    if (!descripcion) throw 'Descripcion is required';

    let newEstado = estado ?? "PASIVO";
    if (newEstado !== "PASIVO" && newEstado !== "ACTIVO") {
      throw 'Estado must be either "PASIVO" or "ACTIVO"';
    }

    return new ConceptoEntity(id, descripcion, newEstado);
  }
}

  
  
  