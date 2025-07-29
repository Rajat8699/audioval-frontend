import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "./Heading";
import Text from "./Text";

const FAQSection: React.FC = () => {
  const faqData = [
    {
      question: "How do artists get paid?",
      answer:
        "Artists earn 70% of ad revenue based on their total song unlocks each month. Paid monthly through Stripe. A song becomes eligible for earnings once it goes live on Drop Day. Artists must earn a minimum of $10 to receive a payout",
    },
    {
      question: "What makes AudioVal different?",
      answer:
        "AudioVal focuses on the Drop Day concept where artists upload only one song per day, ensuring each track gets the attention it deserves. We offer higher revenue sharing and a unique discovery experience.",
    },
    {
      question: "Can I listen without ads?",
      answer:
        "Yes! Once you unlock a track, you can listen to it without any ads. The unlock system ensures that artists get compensated while providing listeners with an ad-free experience for their favorite songs.",
    },
    {
      question: "What is Drop Day?",
      answer:
        "Drop Day is our unique system where artists can upload one song per day. This creates a curated, focused listening experience where each track gets its moment to shine and listeners can discover new music intentionally.",
    },
    {
      question:
        "How does AudioVal ensure music quality and copyright compliance?",
      answer:
        "All songs go through a review process before going live on Drop Day. We have strict quality standards and copyright compliance measures to ensure only original, high-quality content reaches our listeners.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Heading */}
          <div className="space-y-6">
            <Heading variant="h2" className="text-4xl lg:text-5xl text-primary">
              Frequently Asked Question
            </Heading>
          </div>

          {/* Right side - Accordion */}
          <div className="w-full">
            <div className="bg-black/5 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left py-4 hover:no-underline px-0">
                      <span className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-0">
                      <Text variant="paragraph" className="text-gray-300">
                        {faq.answer}
                      </Text>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
