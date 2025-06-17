export class Converters {
  StringToBoolean(value: string): boolean {
    if (value === "true" || value === "TRUE") {
      return true;
    }
    return false;
  }
  StringToNumber(value: string): number {
    const number = parseFloat(value);
    if (isNaN(number)) {
      console.error(`Erro ao converter '${value}' para número.`);
      return 0;
    }
    return number;
  }
}
