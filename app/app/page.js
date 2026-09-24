import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export const metadata = {
  title: "Dashboard | SubSave",
  description: "Manage your subscriptions with SubSave.",
};

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const fullName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    "";

  const firstName =
    fullName.split(" ")[0] ||
    user.email?.split("@")[0] ||
    "there";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      <nav
        style={{
          height: "72px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            {user.email}
          </div>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "55px 30px 100px",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "36px",
              letterSpacing: "-1.6px",
              margin: "0 0 8px",
            }}
          >
            Welcome, {firstName}
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "16px",
            }}
          >
            Here is an overview of your subscriptions.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <div
              style={{
                color: "#6b7280",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              MONTHLY SPENDING
            </div>

            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              $0.00
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <div
              style={{
                color: "#6b7280",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              YEARLY SPENDING
            </div>

            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              $0.00
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <div
              style={{
                color: "#6b7280",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              SUBSCRIPTIONS
            </div>

            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              0
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <div
              style={{
                color: "#6b7280",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              PRICE ALERTS
            </div>

            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              0
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            padding: "55px 30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              margin: "0 auto 20px",
              background: "#eff6ff",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
              fontSize: "24px",
              fontWeight: "800",
            }}
          >
            +
          </div>

          <h2
            style={{
              fontSize: "24px",
              letterSpacing: "-0.8px",
              margin: "0 0 10px",
            }}
          >
            No subscriptions yet
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              lineHeight: "1.6",
              maxWidth: "470px",
              margin: "0 auto",
            }}
          >
            Once you add subscriptions, your monthly costs, yearly costs,
            price history, and alerts will appear here.
          </p>
        </div>
      </section>
    </main>
  );
}
