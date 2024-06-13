export class UpdateGastoDto {
  private constructor(
    public readonly id: number,
    public readonly clienteId?: number,
    public readonly conceptoId?: number,
    public readonly fecha?: Date,
    public readonly hora?: string,
    public readonly valorgasto?: number,
    public readonly estado?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.clienteId) returnObj.clienteId = this.clienteId;
    if (this.conceptoId) returnObj.conceptoId = this.conceptoId;
    if (this.fecha) returnObj.fecha = this.fecha;
    if (this.hora) returnObj.hora = this.hora;
    if (this.valorgasto) returnObj.valorgasto = this.valorgasto;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateGastoDto?] {
    const { id, clienteId, conceptoId, fecha, hora, valorgasto, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (estado && estado !== "PASIVO" && estado !== "ACTIVO") {
      return ['estado must be either "PASIVO" or "ACTIVO"'];
    }

    return [undefined, new UpdateGastoDto(id, clienteId, conceptoId, fecha ? new Date(fecha) : undefined, hora, valorgasto, estado)];
  }
}
