import type { ReactNode } from "react";
import "./HelpForm.scss";

export function HelpFormRequiredMark() {
  return <span className="helpForm__required" aria-hidden="true">*</span>;
}

type HelpFormFieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  hintSmall?: boolean;
  className?: string;
  htmlFor?: string;
  children: ReactNode;
};

export function HelpFormField({
  label,
  required = false,
  hint,
  hintSmall = false,
  className = "",
  htmlFor,
  children,
}: HelpFormFieldProps) {
  const fieldClass = ["helpForm__field", className].filter(Boolean).join(" ");

  return (
    <div className={fieldClass}>
      <label className="helpForm__label" htmlFor={htmlFor}>
        {label}
        {required ? <HelpFormRequiredMark /> : null}
      </label>
      {children}
      {hint ? (
        <span
          className={
            hintSmall ? "helpForm__hint helpForm__hint--small" : "helpForm__hint"
          }
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export function countHelpFormWords(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}
