import "./helpSubpage.scss";

type HelpStepSummaryProps = {
  title: string;
  description?: string;
  activeStep?: number;
  totalSteps?: number;
};

export default function HelpStepSummary({
  title,
  description,
  activeStep = 0,
  totalSteps = 2,
}: HelpStepSummaryProps) {
  return (
    <section className="helpSubpageStepCard" aria-labelledby="help-step-summary-title">
      <h2 id="help-step-summary-title" className="helpSubpageStepCard__title">
        {title}
      </h2>
      {description ? (
        <p className="helpSubpageStepCard__description">{description}</p>
      ) : null}
      <div className="helpSubpageStepCard__progress" aria-hidden="true">
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            className={`helpSubpageStepCard__progressStep${
              index <= activeStep ? " isActive" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
}
