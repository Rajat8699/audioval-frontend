import LegalPage from "@/components/LegalPage";
import { PRIVACY_POLICY_SECTIONS } from "@/lib/constants";

export default function PrivacyPolicy() {
    return (
        <LegalPage
            title="Privacy Policy"
            subtitle='AudioVal ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.'
            headerIcon="🔒"
            sections={PRIVACY_POLICY_SECTIONS}
            contactSection={true}
        />
    );
}