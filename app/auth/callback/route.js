import { NextResponse } from "next/server";
import { createClient } from "../../utils/supabase/server";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !user) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const metadata = user.user_metadata || {};

  const fullName = metadata.full_name || metadata.name || "";
  const nameParts = fullName.trim().split(/\s+/).filter(Boolean);

  const firstName =
    metadata.given_name ||
    metadata.first_name ||
    nameParts[0] ||
    "";

  const lastName =
    metadata.family_name ||
    metadata.last_name ||
    (nameParts.length > 1 ? nameParts.slice(1).join(" ") : null);

  const { error: profileError } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      email: user.email,
    },
    {
      onConflict: "id",
      ignoreDuplicates: true,
    }
  );

  if (profileError) {
    return NextResponse.redirect(
      `${origin}/login?error=profile_setup_failed`
    );
  }

  return NextResponse.redirect(`${origin}/app`);
}
