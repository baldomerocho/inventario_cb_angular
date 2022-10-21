export interface Provider {
  id: number;
  name: string;
  nit: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProvider(json: string): Provider {
    return JSON.parse(json);
  }

  public static providerToJson(value: Provider): string {
    return JSON.stringify(value);
  }
}
