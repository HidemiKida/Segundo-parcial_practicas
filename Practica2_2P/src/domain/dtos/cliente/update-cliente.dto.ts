export class UpdateClienteDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly identificacion?: string,
    public readonly estado?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.identificacion) returnObj.identificacion = this.identificacion;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateClienteDto?] {
    const { id, nombre, identificacion, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (estado && estado !== "PASIVO" && estado !== "ACTIVO") {
      return ['estado must be either "PASIVO" or "ACTIVO"'];
    }

    return [undefined, new UpdateClienteDto(id, nombre, identificacion, estado)];
  }
}
