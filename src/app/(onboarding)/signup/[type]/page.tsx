import { notFound } from "next/navigation";
import { AgenciesSignupForm } from "@/features/onboarding/signup/AgenciesSignupForm";
import { CorporateSignupForm } from "@/features/onboarding/signup/CorporateSignupForm";
import { MemberSignupForm } from "@/features/onboarding/signup/MemberSignupForm";
import "@/styles/signup.scss";

const SIGNUP_TYPES = ["member", "corporate", "agencies"] as const;

type SignupType = (typeof SIGNUP_TYPES)[number];

type SignupTypePageProps = {
  params: Promise<{ type: string }>;
};

function isSignupType(value: string): value is SignupType {
  return SIGNUP_TYPES.includes(value as SignupType);
}

export default async function SignupTypePage({ params }: SignupTypePageProps) {
  const { type } = await params;

  if (!isSignupType(type)) {
    notFound();
  }

  if (type === "corporate") {
    return <CorporateSignupForm />;
  }

  if (type === "agencies") {
    return <AgenciesSignupForm />;
  }

  return <MemberSignupForm />;
}
