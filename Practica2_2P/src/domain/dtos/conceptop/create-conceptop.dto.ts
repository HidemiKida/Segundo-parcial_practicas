export class CreateConceptoDto {
  private constructor(
    public readonly descripcion: string,
    public readonly estado: string = "PASIVO"
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateConceptoDto?] {
    const { descripcion, estado } = props;

    if (!descripcion) return ['Descripcion property is required', undefined];
    let newEstado = estado ?? "PASIVO";
    if (newEstado !== "PASIVO" && newEstado !== "ACTIVO") {
      return ['Estado must be either "PASIVO" or "ACTIVO"', undefined];
    }

    return [undefined, new CreateConceptoDto(descripcion, newEstado)];
  }
}
