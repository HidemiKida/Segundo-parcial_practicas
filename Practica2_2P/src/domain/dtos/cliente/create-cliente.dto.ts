export class CreateClienteDto {
  private constructor(
    public readonly nombre: string | null,
    public readonly identificacion: string,
    public readonly estado: string = "PASIVO"
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateClienteDto?] {
    const { nombre, identificacion, estado } = props;

    if (!identificacion) return ['Identificacion property is required', undefined];
    let newEstado = estado ?? "PASIVO";
    if (newEstado !== "PASIVO" && newEstado !== "ACTIVO") {
      return ['Estado must be either "PASIVO" or "ACTIVO"', undefined];
    }

    return [undefined, new CreateClienteDto(nombre ?? null, identificacion, newEstado)];
  }
}
