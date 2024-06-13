export class CreateGastoDto {
  private constructor(
    public readonly clienteId: number,
    public readonly conceptoId: number,
    public readonly fecha: Date,
    public readonly hora: string,
    public readonly valorgasto: number,
    public readonly estado: string = "PASIVO"
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateGastoDto?] {
    const { clienteId, conceptoId, fecha, hora, valorgasto, estado } = props;

    if (!clienteId) return ['ClienteId property is required', undefined];
    if (!conceptoId) return ['ConceptoId property is required', undefined];
    if (!fecha) return ['Fecha property is required', undefined];
    if (!hora) return ['Hora property is required', undefined];
    if (!valorgasto) return ['ValorGasto property is required', undefined];

    let newEstado = estado ?? "PASIVO";
    if (newEstado !== "PASIVO" && newEstado !== "ACTIVO") {
      return ['Estado must be either "PASIVO" or "ACTIVO"', undefined];
    }

    return [undefined, new CreateGastoDto(clienteId, conceptoId, new Date(fecha), hora, valorgasto, newEstado)];
  }
}
