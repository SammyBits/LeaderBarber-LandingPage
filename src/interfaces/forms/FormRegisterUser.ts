export interface FormRegisterUser {
  type: astroHTML.JSX.HTMLInputTypeAttribute | null | undefined;
  id: string | null | undefined;
  name: string | null | undefined;
  value?: string | null | undefined;
  placeholder: string | null | undefined;
  required?: boolean | null | undefined;
  autoComplete?: string | null | undefined;
  onChange?: (e: any) => void;
  label: string | null | undefined;
  maxLength?: number | null | undefined;
  minLength?: number | null | undefined;
}
