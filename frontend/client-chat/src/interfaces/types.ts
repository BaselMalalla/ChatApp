// CheckboxProps Interface
export interface CheckboxProps {
  id: string;
  label: string;
  className?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

// InputFieldProps Interface
export interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// SignUpLinkProps Interface
export interface SignUpLinkProps {
  className?: string;
}

// SubmitButtonProps Interface
export interface SubmitButtonProps {
  text: string;
  className?: string;
  disabled?:boolean
}

export interface LogoProps {
  className?: string;
}
