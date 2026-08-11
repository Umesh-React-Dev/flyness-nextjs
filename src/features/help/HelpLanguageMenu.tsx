const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
] as const;

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.33333 8C1.33333 11.6794 4.32057 14.6667 8 14.6667C11.6794 14.6667 14.6667 11.6794 14.6667 8C14.6667 4.32057 11.6794 1.33333 8 1.33333C4.32057 1.33333 1.33333 4.32057 1.33333 8V8"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33333C4.44444 5.06667 4.44444 10.9333 8 14.6667C11.5556 10.9333 11.5556 5.06667 8 1.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 8H14.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.3333 4L6 11.3333L2.66667 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HelpLanguageMenu() {
  return (
    <details className="helpHeader__langWrap">
      <summary className="helpHeader__lang" aria-label="Language">
        <span className="helpHeader__langIcon" aria-hidden="true">
          <GlobeIcon />
        </span>
        <span className="helpHeader__langLabel helpHeader__langLabel--en">
          English
        </span>
        <span className="helpHeader__langLabel helpHeader__langLabel--ar">
          العربية
        </span>
      </summary>

      <div className="helpHeader__langMenu" role="listbox" aria-label="Language">
        {LANGUAGES.map((option) => (
          <label key={option.code} className="helpHeader__langOption">
            <input
              type="radio"
              name="help-language"
              value={option.code}
              defaultChecked={option.code === "en"}
              className="helpHeader__langInput"
            />
            <span>{option.label}</span>
            <span className="helpHeader__langCheck" aria-hidden="true">
              <CheckIcon />
            </span>
          </label>
        ))}
      </div>
    </details>
  );
}
