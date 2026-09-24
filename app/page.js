export default function Home() {
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
        <div
          style={{
            fontSize: "27px",
            fontWeight: "800",
            letterSpacing: "-1.2px",
          }}
        >
          Sub<span style={{ color: "#2563eb" }}>Save</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          <span>How It Works</span>
          <span>Pricing</span>
          <span>Log In</span>

          <button
            style={{
              background: "#2563eb",
              color: "#ffffff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "105px 30px 80px",
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
            marginBottom: "26px",
          }}
        >
          Take control of your subscriptions
        </div>

        <h1
          style={{
            fontSize: "68px",
            lineHeight: "1.05",
            letterSpacing: "-3.5px",
            margin: "0 auto",
            maxWidth: "900px",
            fontWeight: "800",
          }}
        >
          Stop paying for things
          <br />
          <span style={{ color: "#2563eb" }}>you forgot about.</span>
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "20px",
            lineHeight: "1.6",
            maxWidth: "670px",
            margin: "28px auto",
          }}
        >
          Track every subscription in one place, spot price increases,
          and see exactly where your money goes every month.
        </p>

        <button
          style={{
            marginTop: "10px",
            background: "#2563eb",
            color: "#ffffff",
            border: "none",
            padding: "17px 30px",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(37,99,235,0.20)",
          }}
        >
          Start Tracking — Free
        </button>

        <div
          style={{
            color: "#9ca3af",
            fontSize: "13px",
            marginTop: "14px",
          }}
        >
          No credit card required
        </div>

        {/* DASHBOARD PREVIEW */}
        <div
          style={{
            maxWidth: "900px",
            margin: "80px auto 0",
            background: "#f8fafc",
            border: "1px solid #e5e7eb",
            borderRadius: "22px",
            padding: "32px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                MONTHLY SUBSCRIPTIONS
              </div>

              <div
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  letterSpacing: "-2px",
                }}
              >
                $428.73
              </div>

              <div
                style={{
                  color: "#6b7280",
                  marginTop: "5px",
                }}
              >
                $5,144.76 per year
              </div>
            </div>

            <button
              style={{
                background: "#111827",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "12px 18px",
                fontWeight: "700",
              }}
            >
              Add Subscription
            </button>
          </div>

          {/* PRICE ALERT */}
          <div
            style={{
              background: "#fff7f7",
              border: "1px solid #fee2e2",
              borderRadius: "14px",
              padding: "18px 20px",
              marginBottom: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: "700",
                  marginBottom: "4px",
                }}
              >
                Netflix price increase
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                $15.49 → $22.99
              </div>
            </div>

            <strong
              style={{
                color: "#dc2626",
                fontSize: "16px",
              }}
            >
              +48.4%
            </strong>
          </div>

          {/* SUBSCRIPTION */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px 20px",
              marginBottom: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: "700" }}>Spotify</div>

              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "13px",
                  marginTop: "4px",
                }}
              >
                Entertainment
              </div>
            </div>

            <strong>$11.99 / month</strong>
          </div>

          {/* SUBSCRIPTION */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: "700" }}>iCloud+</div>

              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "13px",
                  marginTop: "4px",
                }}
              >
                Cloud Storage
              </div>
            </div>

            <strong>$9.99 / month</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
