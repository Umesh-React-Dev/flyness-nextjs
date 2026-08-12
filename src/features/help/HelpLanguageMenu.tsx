import CheckIcon from "@/assets/icons/CheckIcon";
import HelpGlobeIcon from "@/assets/icons/HelpGlobeIcon";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
] as const;

export default function HelpLanguageMenu() {
  return (
    <div className="helpHeader__langWrap">
      <div
        className="helpHeader__lang"
        role="button"
        tabIndex={0}
        aria-label="Language"
        aria-haspopup="listbox"
      >
        <span className="helpHeader__langIcon" aria-hidden="true">
          <HelpGlobeIcon />
        </span>
        <span className="helpHeader__langLabel helpHeader__langLabel--en">
          English
        </span>
        <span className="helpHeader__langLabel helpHeader__langLabel--ar">
          العربية
        </span>
      </div>

      <div className="helpHeader__langMenu" role="listbox" aria-label="Language">
        {LANGUAGES.map((option) => (
          <div key={option.code} className="helpHeader__langOption" role="option">
            <input
              type="radio"
              name="help-language"
              value={option.code}
              defaultChecked={option.code === "en"}
              className="helpHeader__langInput"
              aria-label={option.label}
            />
            <span>{option.label}</span>
            <span className="helpHeader__langCheck" aria-hidden="true">
              <CheckIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
