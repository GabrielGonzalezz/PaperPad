export interface Theme {
  id: string;
  name: string;
  background: string;
  text: string;
  font: string;
  primary: string;
  secondary: string;
}

// FIX: Define and export the missing EnhancementType enum.
export enum EnhancementType {
  SUMMARIZE = "SUMMARIZE",
}
