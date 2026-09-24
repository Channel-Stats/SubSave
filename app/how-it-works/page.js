import Link from "next/link";

export const metadata = {
  title: "How It Works | SubSave",
  description:
    "See how SubSave helps you track subscriptions, monitor price changes, and understand your recurring spending.",
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add your subscriptions",
      description:
        "Add the services you pay for so everything is organized in one simple dashboard.",
    },
    {
      number: "02",
      title: "See what you're really spending",
      description:
        "SubSave shows your monthly and yearly subscription costs so you always know where your money is going.",
    },
    {
      number: "03",
      title: "Track price changes",
      description:
        "See when the price of a subscription changes and keep a clear history of what you were paying before.",
    },
    {
      number: "04",
      title: "Stay in control",
      description:
        "Review your subscriptions in one place and decide which services are still worth keeping.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111827",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      }}
    >
      {/* NAVIGATION */}
      <nav
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "24px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/home"
          style={{
            fontSize: "27px",
            fontWeight: "800",
            letterSpacing: "-1.2px",
            color: "#111827",
            textDecoration: "none",
          }}
        >
          Sub<span style={{ color: "#2563eb" }}>Save</span>
        </Link>

        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          <Link
            href="/how-it-works"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            How It Works
          </Link>

          <Link
            href="/pricing"
            style={{ color: "#111827", textDecoration: "none" }}
          >
            Pricing
          </Link>

          <Link
            href="/login"
            style={{ color: "#111827", textDecoration: "none" }}
          >
            Log In
          </Link>

          <Link
            href="/signup"
            style={{
              background: "#2563eb",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "110px 30px 75px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#eff6ff",
            color: "#2563eb",
            padding: "8px 16px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "25px",
          }}
        >
          SIMPLE SUBSCRIPTION TRACKING
        </div>

        <h1
          style={{
            fontSize: "62px",
            lineHeight: "1.06",
            letterSpacing: "-3px",
            margin: "0",
            fontWeight: "800",
          }}
        >
          Your subscriptions.
          <br />
          <span style={{ color: "#2563eb" }}>Finally under control.</span>
        </h1>

        <p
          style={{
            maxWidth: "660px",
            margin: "27px auto 0",
            color: "#6b7280",
            fontSize: "19px",
            lineHeight: "1.65",
          }}
        >
          SubSave gives you one place to understand what you're paying for,
          how much it costs, and when those costs change.
        </p>
      </section>

      {/* STEPS */}
      <section
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #eef2f7",
          borderBottom: "1px solid #eef2f7",
          padding: "85px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                gap: "30px",
                padding: "38px 0",
                borderBottom:
                  index === steps.length - 1
                    ? "none"
                    : "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontSize: "16px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                {step.number}
              </div>

              <div>
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: "28px",
                    letterSpacing: "-1px",
                  }}
                >
                  {step.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#6b7280",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    maxWidth: "680px",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "105px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            letterSpacing: "-2px",
            margin: "0 0 18px",
          }}
        >
          Know exactly what you're paying for.
        </h2>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
            margin: "0 auto 30px",
          }}
        >
          Start organizing your subscriptions with SubSave.
        </p>

        <Link
          href="/signup"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "#ffffff",
            padding: "16px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "16px",
            boxShadow: "0 10px 30px rgba(37,99,235,0.18)",
          }}
        >
          Get Started Free
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "28px 30px",
          color: "#9ca3af",
          fontSize: "13px",
          textAlign: "center",
        }}
      >
        © 2026 SubSave. All rights reserved.
      </footer>
    </main>
  );
}
