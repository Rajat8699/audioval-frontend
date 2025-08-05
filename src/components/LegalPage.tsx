import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBlob } from "@/components/ui/background-blob";
import { CONTACT_INFO } from "@/lib/constants";

interface LegalSection {
    title: string;
    icon: string;
    content?: string;
    subtitle?: string;
    items?: readonly string[];
    additionalContent?: string;
}

interface LegalPageProps {
    title: string;
    subtitle: string;
    headerIcon: string;
    sections: readonly LegalSection[];
    contactSection?: boolean;
}

export default function LegalPage({
    title,
    subtitle,
    headerIcon,
    sections,
    contactSection = false
}: LegalPageProps) {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Blobs */}
            <BackgroundBlob
                className="absolute top-20 left-10 opacity-[0.08]"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "#6FA8DC",
                    filter: "blur(30px)",
                }}
            />
            <BackgroundBlob
                className="absolute bottom-20 right-10 opacity-[0.08]"
                style={{
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, #C7C7D9 85.1%, transparent 100%)",
                    filter: "blur(30px)",
                }}
            />

            <div className="container-responsive mx-auto px-4 py-16 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <span className="text-2xl">{headerIcon}</span>
                    </div>
                    <Heading variant="h1" className="text-primary mb-6">
                        {title}
                    </Heading>
                    <Text variant="paragraph" className="max-w-3xl mx-auto text-muted-foreground">
                        {subtitle}
                    </Text>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {sections.map((section, index) => (
                        <Card key={index} className="border-primary/20 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-primary">
                                    <Heading variant="h6" className="text-primary">
                                        <span className="text-xl mr-2">{section.icon}</span>
                                        {section.title}
                                    </Heading>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {section.content && (
                                    <Text variant="paragraph">
                                        {section.content}
                                    </Text>
                                )}

                                {section.subtitle && (
                                    <Text variant="text" className="font-semibold mb-4">
                                        {section.subtitle}
                                    </Text>
                                )}

                                {section.items && (
                                    <div className="space-y-3">
                                        {section.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <Text variant="text">{item}</Text>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.additionalContent && (
                                    <Text variant="paragraph" className="mt-4">
                                        {section.additionalContent}
                                    </Text>
                                )}
                            </CardContent>
                        </Card>
                    ))}

                    {/* Contact Section (if enabled) */}
                    {contactSection && (
                        <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-primary">
                                    <Heading variant="h6" className="text-primary"><span className="text-xl mr-2">📧</span>
                                        Contact
                                    </Heading>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                    <Text variant="text" className="font-semibold text-primary">
                                        For any questions, contact us at{" "}
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="underline hover:text-primary/80 transition-colors">
                                            {CONTACT_INFO.email}
                                        </a>
                                    </Text>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
} 