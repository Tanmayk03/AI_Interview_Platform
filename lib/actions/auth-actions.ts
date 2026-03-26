"use server";

export async function signUp(_params: SignUpParams) {
  // Stubbed server action so auth pages function while backend persistence is not wired yet.
  return { success: true as const, message: "User registered" };
}

export async function signIn(_params: SignInParams) {
  // Stubbed server action so auth pages function while session handling is not wired yet.
  return { success: true as const, message: "Signed in" };
}
