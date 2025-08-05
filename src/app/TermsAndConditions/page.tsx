import LegalPage from "@/components/LegalPage";
import { TERMS_AND_CONDITIONS_SECTIONS } from "@/lib/constants";

export default function TermAndConditions() {
    return (
        <LegalPage
            title="Terms and Conditions"
            subtitle='Welcome to AudioVal. By using our website or mobile application ("App"), you agree to the following terms and conditions. If you do not agree, please do not use our platform.'
            headerIcon="📄"
            sections={TERMS_AND_CONDITIONS_SECTIONS}
            contactSection={true}
        />
    );
}