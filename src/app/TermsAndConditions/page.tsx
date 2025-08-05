import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBlob } from "@/components/ui/background-blob";

export default function TermAndConditions() {
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
                        <span className="text-2xl">📄</span>
                    </div>
                    <Heading variant="h1" className="text-primary mb-6">
                        Terms and Conditions
                    </Heading>
                    <Text variant="paragraph" className="max-w-3xl mx-auto text-muted-foreground">
                        Welcome to AudioVal. By using our website or mobile application ("App"), you agree to the following terms and conditions. If you do not agree, please do not use our platform.
                    </Text>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Use of the Platform */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">🎵</span>
                                    1. Use of the Platform
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                You agree to use AudioVal for personal, non-commercial purposes unless you are an artist uploading your own content. You must comply with all applicable laws and these Terms.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Account Registration */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">👤</span>
                                    2. Account Registration
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                To use certain features, you may need to register and create an account. You are responsible for maintaining the confidentiality of your login information.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* User Content */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">🎨</span>
                                    3. User Content
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <Text variant="paragraph">
                                    By uploading a song or content, you affirm that:
                                </Text>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <Text variant="text">You own the rights to it or have permission to distribute it.</Text>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <Text variant="text">It does not infringe on any copyright, trademark, or other legal rights.</Text>
                                    </div>
                                </div>
                                <Text variant="paragraph" className="mt-4">
                                    AudioVal reserves the right to reject or remove content that violates these rules.
                                </Text>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Payment to Artists */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">💰</span>
                                    4. Payment to Artists
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                Artists earn 70% of ad revenue generated from their songs. Payouts are processed via Stripe, subject to Stripe's own terms and conditions.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Intellectual Property */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">⚖️</span>
                                    5. Intellectual Property
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                All trademarks, logos, and content on AudioVal (excluding user-submitted songs) are the property of AudioVal. You may not copy, reproduce, or distribute any part of our platform without permission.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Termination */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">🚫</span>
                                    6. Termination
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                We may suspend or terminate access to AudioVal at any time if you violate these terms or for any other reason.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Changes */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">📝</span>
                                    7. Changes
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Text variant="paragraph">
                                We reserve the right to modify these terms at any time. Continued use of AudioVal constitutes acceptance of those changes.
                            </Text>
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card className="border-primary/20 hover:border-primary/30 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-primary">
                                <Heading variant="h4"><span className="text-xl mr-2">📧</span>
                                    8. Contact
                                </Heading>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <Text variant="text" className="font-semibold text-primary">
                                    For any questions about these terms, contact us at{" "}
                                    <a href="mailto:info@audioval.com" className="underline hover:text-primary/80 transition-colors">
                                        info@audioval.com
                                    </a>
                                </Text>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}