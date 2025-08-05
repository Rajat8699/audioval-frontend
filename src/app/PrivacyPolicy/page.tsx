import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBlob } from "@/components/ui/background-blob";

export default function PrivacyPolicy() {
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
                        <span className="text-2xl">🔒</span>
                    </div>
                    <Heading variant="h1" className="text-primary mb-6">
                        Privacy Policy
                    </Heading>
                    <Text variant="paragraph" className="max-w-3xl mx-auto text-muted-foreground">
                        AudioVal ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.
                    </Text>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Information We Collect */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">📊</span>
                                    1. Information We Collect
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <Text variant="text" className="font-semibold">Account Information: </Text>
                                            <Text variant="text" className="text-muted-foreground">Name, email, password, and other signup data.</Text>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <Text variant="text" className="font-semibold">Artist Data: </Text>
                                            <Text variant="text" className="text-muted-foreground">Songs, profile info, Stripe account for payouts.</Text>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <Text variant="text" className="font-semibold">Usage Data: </Text>
                                            <Text variant="text" className="text-muted-foreground">What you listen to, likes, previews, and unlocks.</Text>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <Text variant="text" className="font-semibold">Device Data: </Text>
                                            <Text variant="text" className="text-muted-foreground">Device type, IP address, OS, and browser info.</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* How We Use Your Info */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">⚙️</span>
                                    2. How We Use Your Info
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <Text variant="text">To operate and improve the AudioVal platform</Text>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <Text variant="text">To personalize your experience and recommend music</Text>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <Text variant="text">To process artist payouts</Text>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <Text variant="text">To communicate updates, changes, or promotions (if opted-in)</Text>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sharing Your Info */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">🤝</span>
                                    3. Sharing Your Info
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                We do not sell your data. We only share with trusted third parties (e.g., Stripe for payments, analytics providers) to help us operate our service.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Cookies & Tracking */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">🍪</span>
                                    4. Cookies & Tracking
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                We use basic cookies or tracking tools (like Google Analytics) to understand site usage. You can disable cookies in your browser if you prefer.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Your Rights */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">⚖️</span>
                                    5. Your Rights
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <Text variant="text" className="font-semibold">You can request to:</Text>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <Text variant="text">Access or update your data</Text>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <Text variant="text">Delete your account</Text>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <Text variant="text">Opt-out of non-essential communication</Text>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                                    <Text variant="text" className="font-semibold text-primary">
                                        To do so, email us at{" "}
                                        <a href="mailto:info@audioval.com" className="underline hover:text-primary/80 transition-colors">
                                            info@audioval.com
                                        </a>
                                    </Text>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Security */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">🔐</span>
                                    6. Security
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                We implement reasonable measures to protect your data but cannot guarantee 100% security.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Children's Privacy */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">👶</span>
                                    7. Children's Privacy
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                AudioVal is not intended for users under 13 years old.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Changes */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">📝</span>
                                    8. Changes
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                We may update this Privacy Policy as needed. We'll notify users of major changes.
                            </Text>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                {/* <div className="text-center mt-16 pt-8 border-t border-border">
                    <Text variant="text" className="text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </Text>
                </div> */}
            </div>
        </div>
    );
}