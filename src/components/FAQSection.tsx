"use client";

import { memo } from "react";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqData: readonly FAQItem[];
  className?: string;
}

const FAQSection = memo<FAQSectionProps>(({ title, faqData, className }) => {
  return (
    <section
      className={`relative py-4 sm:py-6 lg:py-8 xl:py-10 2xl:py-12 overflow-hidden ${className || ""
        }`}
    >
      <div className="relative z-10 container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 items-start justify-center">
          {/* Left side - Heading */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6 my-auto">
            <Heading variant="h1" className="text-primary font-semibold">
              {title}
            </Heading>
          </div>

          {/* Right side - Accordion */}
          <div className="w-full">
            <div className="bg-[#838383]/10 backdrop-blur-sm rounded-2xl p-1.5 sm:p-2 lg:p-3 xl:p-4 2xl:p-6 shadow-xl">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-0.5 sm:space-y-1 lg:space-y-2"
              >
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left py-0.5 sm:py-1 lg:py-2 xl:py-3 hover:no-underline px-0">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white pr-1.5 sm:pr-2 leading-relaxed">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0.5 sm:pb-1 lg:pb-2 xl:pb-3 px-0">
                      <Text
                        variant="paragraph"
                        className="text-gray-300 leading-relaxed"
                      >
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
});

FAQSection.displayName = "FAQSection";

export { FAQSection };
