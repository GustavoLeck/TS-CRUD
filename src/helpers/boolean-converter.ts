export class BooleanConverter {
  StringToBoolean(value: string): boolean {
    if (value === "true" || value === "TRUE") {
      return true;
    }
    return false;
  }
}
