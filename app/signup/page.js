import Link from "next/link";

export const metadata = {
  title: "Sign Up | SubSave",
  description: "Create your SubSave account and start your 7-day free trial.",
};

export default function Signup() {
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

      {/* SIGNUP AREA */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "55px 24px 100px",
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
              Create your account
            </h1>

            <p
              style={{
                margin: 0,
                color: "#6b7280",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Start your 7-day free trial of SubSave.
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
            {/* GOOGLE BUTTON */}
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

            {/* DIVIDER */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                margin: "26px 0",
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
                YOUR PROFILE
              </span>

              <div
                style={{
                  height: "1px",
                  background: "#e5e7eb",
                  flex: 1,
                }}
              />
            </div>

            {/* FIRST NAME */}
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              First name
            </label>

            <input
              type="text"
              placeholder="Your first name"
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "50px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "0 14px",
                fontSize: "15px",
                outline: "none",
                background: "#ffffff",
                color: "#111827",
                marginBottom: "20px",
              }}
            />

            {/* LAST NAME */}
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Last name{" "}
              <span
                style={{
                  color: "#9ca3af",
                  fontWeight: "500",
                }}
              >
                (optional)
              </span>
            </label>

            <input
              type="text"
              placeholder="Your last name"
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "50px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "0 14px",
                fontSize: "15px",
                outline: "none",
                background: "#ffffff",
                color: "#111827",
                marginBottom: "24px",
              }}
            />

            {/* CONTINUE */}
            <button
              type="button"
              style={{
                width: "100%",
                height: "52px",
                border: "none",
                borderRadius: "11px",
                background: "#2563eb",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(37,99,235,0.18)",
              }}
            >
              Create Account
            </button>

            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px",
                margin: "25px 0 0",
              }}
            >
              Already have an account?{" "}
              <Link
                href="/login"
                style={{
                  color: "#2563eb",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Log In
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
            By creating an account, you agree to SubSave's Terms of Service
            and Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
