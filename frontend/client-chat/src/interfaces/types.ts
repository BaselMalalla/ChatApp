// CheckboxProps Interface
export interface CheckboxProps {
  id: string;
  label: string;
  className?: string;
  required?: boolean;
}

// InputFieldProps Interface
export interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

// SignUpLinkProps Interface
export interface SignUpLinkProps {
  className?: string;
}

// SubmitButtonProps Interface
export interface SubmitButtonProps {
  text: string;
  className?: string;
}
