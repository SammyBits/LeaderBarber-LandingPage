type FormRegisterUser = {
  type?: astroHTML.JSX.HTMLInputTypeAttribute | null | undefined;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (e: any) => void;
  label?: string;
  maxLength?: number;
  minLength?: number;
};
