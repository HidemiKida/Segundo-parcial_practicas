export class UpdateConceptoDto {
  private constructor(
    public readonly id: number,
    public readonly descripcion?: string,
    public readonly estado?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.descripcion) returnObj.descripcion = this.descripcion;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateConceptoDto?] {
    const { id, descripcion, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (estado && estado !== "PASIVO" && estado !== "ACTIVO") {
      return ['estado must be either "PASIVO" or "ACTIVO"'];
    }

    return [undefined, new UpdateConceptoDto(id, descripcion, estado)];
  }
}
