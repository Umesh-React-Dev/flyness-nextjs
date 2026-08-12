import EmailIcon from "@/assets/icons/EmailIcon";
import "./NewsletterSubscribe.scss";

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
          <EmailIcon className="newsletterSubscribe__icon" />
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
