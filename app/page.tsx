import Link from "next/link";
import { HeroArt, StepIcon } from "@/components/Art";
import { Pic } from "@/components/Pic";
import { FaqList } from "@/components/Faq";
import { BIZ, HOME_FAQS, HOURS, INSURANCE, SERVICES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1 className="display">
              Millsboro&rsquo;s own
              <br />
              pharmacy
            </h1>
            <p className="hero__lede">
              We&rsquo;re an independent pharmacy on Centerview Dr, run by pharmacist Dhruv Patel.
              Move your prescriptions over, get your flu shot here, and have refills brought to your
              door for free.
            </p>
            <div className="hero__ctas">
              <Link href="/transfer" className="btn btn--red btn--lg">
                Transfer my prescriptions
              </Link>
              <a href={BIZ.calendly} className="btn btn--ghost-light btn--lg" target="_blank" rel="noopener">
                Book a vaccine
              </a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="actions" aria-labelledby="actions-h">
        <div className="wrap">
          <h2 id="actions-h" className="actions__h">
            What do you need today?
          </h2>
          <div className="actions__grid">
            <Link href="/transfer" className="action action--main">
              <span className="action__title">Transfer my prescriptions</span>
              <span className="action__text">
                Switching from CVS, Walgreens or anywhere else. Takes about two minutes and we do the
                calling.
              </span>
              <span className="action__go" aria-hidden="true">
                →
              </span>
            </Link>
            <Link href="/refill" className="action">
              <span className="action__title">Refill a prescription</span>
              <span className="action__text">
                Have your prescription number handy and we&rsquo;ll get it ready for pickup or delivery.
              </span>
              <span className="action__go" aria-hidden="true">
                →
              </span>
            </Link>
            <a href={BIZ.calendly} className="action" target="_blank" rel="noopener">
              <span className="action__title">Book a vaccine</span>
              <span className="action__text">
                Flu, COVID-19, shingles and more. Pick a time online, or just walk in.
              </span>
              <span className="action__go" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <p className="actions__call">
            Rather talk to someone? Call <a href={BIZ.phoneHref}>{BIZ.phone}</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">What you get when you switch</h2>
          <div className="tiles">
            <Link href="/services/free-delivery" className="tile">
              <Pic name="delivery" />
              <p>
                Free delivery around Millsboro and Dagsboro, same day on weekdays when it&rsquo;s
                filled before 3pm
              </p>
            </Link>
            <Link href="/about" className="tile">
              <Pic name="consult" />
              <p>A pharmacist who checks every new prescription against everything else you take</p>
            </Link>
            <Link href="/services/vaccines" className="tile">
              <Pic name="vaccine" />
              <p>Flu, COVID-19, shingles and other vaccines, walk in or book a time</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <div className="section__head">
            <h2 className="h2">How a transfer works</h2>
            <Link href="/transfer" className="text-link">
              Transfer details
            </Link>
          </div>
          <div className="steps">
            <div className="step">
              <StepIcon kind="form" />
              <h3>Tell us what to move</h3>
              <p>Your name, date of birth, your current pharmacy and the medications you take.</p>
            </div>
            <div className="step">
              <StepIcon kind="phone" />
              <h3>We call your old pharmacy</h3>
              <p>We handle it with them directly and check your insurance while we&rsquo;re at it.</p>
            </div>
            <div className="step">
              <StepIcon kind="bag" />
              <h3>Pick up or we deliver</h3>
              <p>Usually the same day. Come by Centerview Dr or we&rsquo;ll bring it to you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap equation">
          <h2 className="h2">Delivery is free. You just pay your copay.</h2>
          <p className="equation__row">
            <span>Free local delivery</span>
            <span className="equation__op" aria-hidden="true">
              +
            </span>
            <span>Your usual insurance copay</span>
            <span className="equation__op" aria-hidden="true">
              =
            </span>
            <span className="equation__result">Your meds at home, nothing extra</span>
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap svc">
          <div className="svc__intro">
            <h2 className="h2">Everything we do at the counter</h2>
            <p>
              Tap any service for the details. If you don&rsquo;t see what you need, call us and
              ask.
            </p>
            <Link href="/services" className="btn btn--navy">
              All services
            </Link>
          </div>
          <ul className="svc__list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <span className="svc__name">{s.name}</span>
                  <span className="svc__blurb">{s.blurb}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/transfer">
                <span className="svc__name">Prescription transfers</span>
                <span className="svc__blurb">From any pharmacy, usually the same day.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap rph">
          <div className="rph__badge" aria-hidden="true">
            DP
          </div>
          <div>
            <h2 className="h2">Dhruv Patel, PharmD</h2>
            <blockquote className="rph__quote">
              &ldquo;We didn&rsquo;t start a pharmacy to compete with chains. We started one because
              this town shouldn&rsquo;t have to settle for one.&rdquo;
            </blockquote>
            <p>
              Dhruv has five years in retail pharmacy and a Doctor of Pharmacy from the University of
              Maryland Eastern Shore. He&rsquo;s licensed in Delaware and certified to give
              immunizations and run medication therapy management reviews. He owns the pharmacy and
              works behind the counter.
            </p>
            <Link href="/about" className="text-link">
              Our story
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap ins">
          <div>
            <h2 className="h2">Insurance we take</h2>
            <p>Most major plans. Not on the list? Call and we&rsquo;ll check yours.</p>
          </div>
          <ul className="ins__list">
            {INSURANCE.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      <section className="visit">
        <div className="wrap visit__grid">
          <div>
            <h2 className="h2">Find us on Centerview Dr</h2>
            <address className="visit__addr">
              {BIZ.street}
              <br />
              {BIZ.city}, {BIZ.stateFull} {BIZ.zip}
            </address>
            <dl className="hours hours--lg">
              {HOURS.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.label}</dd>
                </div>
              ))}
            </dl>
            <div className="visit__ctas">
              <a href={BIZ.mapsUrl} className="btn btn--navy" target="_blank" rel="noopener">
                Get directions
              </a>
              <a href={BIZ.phoneHref} className="btn btn--outline">
                {BIZ.phone}
              </a>
            </div>
          </div>
          <iframe
            className="map"
            title="Map to Millsboro Pharmacy"
            src={BIZ.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
