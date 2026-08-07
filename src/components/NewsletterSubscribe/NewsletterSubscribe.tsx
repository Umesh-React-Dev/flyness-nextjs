import "./NewsletterSubscribe.scss";

function EmailIcon() {
  return (
    <svg
      className="newsletterSubscribe__icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3.25"
        y="5.25"
        width="17.5"
        height="13.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5 7.75 6.35 4.7c.4.3.9.3 1.3 0L19 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsletterSubscribe() {
  return (
    <section
      className="newsletterSubscribe"
      aria-labelledby="newsletter-subscribe-title"
    >
      <div className="newsletterSubscribe__inner">
        <div className="newsletterSubscribe__copy">
          <h2
            id="newsletter-subscribe-title"
            className="newsletterSubscribe__title"
          >
            Never Miss a Deal Again
          </h2>
          <p className="newsletterSubscribe__subtitle">
            Be the first to find out about our promotions and new services
          </p>
        </div>

        <form className="newsletterSubscribe__form" action="#" method="post">
          <label className="visually-hidden" htmlFor="newsletter-email">
            Email
          </label>
          <EmailIcon />
          <input
            id="newsletter-email"
            className="newsletterSubscribe__input"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <button type="submit" className="newsletterSubscribe__button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
