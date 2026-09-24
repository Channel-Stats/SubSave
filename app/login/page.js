import Link from "next/link";

export const metadata = {
  title: "Log In | SubSave",
  description: "Log in to your SubSave account.",
};

export default function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#111827",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      }}
    >
      {/* TOP */}
      <nav
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "24px 30px",
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
      </nav>

      {/* LOGIN AREA */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "75px 24px 100px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "460px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                letterSpacing: "-1.8px",
                margin: "0 0 12px",
              }}
            >
              Welcome back
            </h1>

            <p
              style={{
                margin: 0,
                color: "#6b7280",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Log in to manage your subscriptions.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
            }}
          >
            {/* GOOGLE LOGIN */}
            <button
              type="button"
              style={{
                width: "100%",
                height: "52px",
                background: "#ffffff",
                color: "#111827",
                border: "1px solid #d1d5db",
                borderRadius: "11px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: "2px solid #4285F4",
                  color: "#4285F4",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "13px",
                }}
              >
                G
              </span>

              Continue with Google
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                margin: "28px 0",
              }}
            >
              <div
                style={{
                  height: "1px",
                  background: "#e5e7eb",
                  flex: 1,
                }}
              />

              <span
                style={{
                  color: "#9ca3af",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                SUBSAVE
              </span>

              <div
                style={{
                  height: "1px",
                  background: "#e5e7eb",
                  flex: 1,
                }}
              />
            </div>

            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                  marginBottom: "6px",
                }}
              >
                One-click secure login
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                  lineHeight: "1.6",
                }}
              >
                Use your Google account to securely access your SubSave
                dashboard.
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px",
                margin: "26px 0 0",
              }}
            >
              Don't have an account?{" "}
              <Link
                href="/signup"
                style={{
                  color: "#2563eb",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Sign Up
              </Link>
            </p>
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#9ca3af",
              fontSize: "12px",
              lineHeight: "1.6",
              marginTop: "22px",
            }}
          >
            Secure access to your SubSave account.
          </p>
        </div>
      </section>
    </main>
  );
}
