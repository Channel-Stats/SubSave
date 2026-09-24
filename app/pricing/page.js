import Link from "next/link";

export const metadata = {
  title: "Pricing | SubSave",
  description:
    "Start SubSave free for 7 days. Track your subscriptions, monitor price changes, and understand your recurring spending.",
};

export default function Pricing() {
  const features = [
    "Track all your subscriptions",
    "Price increase alerts",
    "Monthly and yearly spending totals",
    "Subscription price history",
    "Simple subscription dashboard",
    "Add and manage subscriptions anytime",
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
            style={{
              color: "#111827",
              textDecoration: "none",
            }}
          >
            How It Works
          </Link>

          <Link
            href="/pricing"
            style={{
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            Pricing
          </Link>

          <Link
            href="/login"
            style={{
              color: "#111827",
              textDecoration: "none",
            }}
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
          padding: "100px 30px 50px",
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
          SIMPLE PRICING
        </div>

        <h1
          style={{
            fontSize: "62px",
            lineHeight: "1.06",
            letterSpacing: "-3px",
            margin: 0,
            fontWeight: "800",
          }}
        >
          One simple plan.
          <br />
          <span style={{ color: "#2563eb" }}>Start free.</span>
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "19px",
            lineHeight: "1.6",
            maxWidth: "620px",
            margin: "26px auto 0",
          }}
        >
          Get full access to SubSave free for 7 days. Then choose monthly
          or annual billing.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "35px 30px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* MONTHLY */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "22px",
              padding: "38px",
              background: "#ffffff",
              boxShadow: "0 15px 45px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                color: "#6b7280",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              MONTHLY
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "800",
                  letterSpacing: "-2px",
                }}
              >
                $11.99
              </span>

              <span style={{ color: "#6b7280" }}>/month</span>
            </div>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Full access to SubSave with flexible monthly billing.
            </p>

            <Link
              href="/signup"
              style={{
                display: "block",
                textAlign: "center",
                border: "1px solid #d1d5db",
                color: "#111827",
                padding: "14px 20px",
                borderRadius: "11px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Start 7-Day Free Trial
            </Link>
          </div>

          {/* ANNUAL */}
          <div
            style={{
              position: "relative",
              border: "2px solid #2563eb",
              borderRadius: "22px",
              padding: "38px",
              background: "#ffffff",
              boxShadow: "0 20px 55px rgba(37,99,235,0.12)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                background: "#2563eb",
                color: "#ffffff",
                padding: "7px 13px",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: "800",
              }}
            >
              SAVE $28.88
            </div>

            <div
              style={{
                color: "#2563eb",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              ANNUAL
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "800",
                  letterSpacing: "-2px",
                }}
              >
                $115
              </span>

              <span style={{ color: "#6b7280" }}>/year</span>
            </div>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              About $9.58 per month when billed annually.
            </p>

            <Link
              href="/signup"
              style={{
                display: "block",
                textAlign: "center",
                background: "#2563eb",
                color: "#ffffff",
                padding: "15px 20px",
                borderRadius: "11px",
                textDecoration: "none",
                fontWeight: "700",
                boxShadow: "0 8px 24px rgba(37,99,235,0.18)",
              }}
            >
              Start 7-Day Free Trial
            </Link>
          </div>
        </div>

        {/* INCLUDED FEATURES */}
        <div
          style={{
            marginTop: "55px",
            background: "#f8fafc",
            border: "1px solid #e5e7eb",
            borderRadius: "22px",
            padding: "40px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "27px",
              margin: "0 0 10px",
              letterSpacing: "-1px",
            }}
          >
            Everything you need to stay on top of subscriptions
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              margin: "0 0 35px",
            }}
          >
            Both billing options include the same SubSave features.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "15px",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    color: "#2563eb",
                    marginRight: "10px",
                    fontWeight: "900",
                  }}
                >
                  ✓
                </span>

                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* TRIAL INFORMATION */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#6b7280",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          Start with a 7-day free trial. Choose monthly or annual billing
          when you subscribe.
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #eef2f7",
          padding: "90px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            letterSpacing: "-1.8px",
            margin: "0 0 16px",
          }}
        >
          Start taking control of your subscriptions.
        </h2>

        <p
          style={{
            color: "#6b7280",
            fontSize: "17px",
            margin: "0 0 28px",
          }}
        >
          Try SubSave free for 7 days.
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
          }}
        >
          Start Free Trial
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
