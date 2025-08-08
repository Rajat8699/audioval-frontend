import { CONTACT_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import {
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
  RedditIcon,
  XIcon,
  FacebookIcon
} from "@/components/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 text-footer-link justify-center my-2">
          <Link
            href={NAVIGATION_LINKS.privacyPolicy}
            className="text-footer-link hover:text-gray-200 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href={NAVIGATION_LINKS.termsAndConditions}
            className="text-footer-link hover:text-gray-200 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-footer-link hover:text-gray-200 transition-colors"
          >
            {CONTACT_INFO.email}
          </Link>
        </div>

        {/* Center - Social Media Icons */}
        <div className="flex gap-4 justify-center py-2">
          <Link
            href={SOCIAL_LINKS.youtube}
            className="text-footer-link hover:text-gray-200 transition-colors"
            target="_blank"
          >
            <YouTubeIcon />
          </Link>
          <Link
            href={SOCIAL_LINKS.instagram}
            className="text-footer-link hover:text-gray-200 transition-colors"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={SOCIAL_LINKS.tiktok}
            className="text-footer-link hover:text-gray-200 transition-colors"
            target="_blank"
          >
            <TikTokIcon />
          </Link>
          <Link
            href={SOCIAL_LINKS.reddit}
            className="text-footer-link hover:text-gray-200 transition-colors"
            target="_blank"
          >
            <RedditIcon />
          </Link>
          <Link
            href={SOCIAL_LINKS.x}
            className="text-footer-link hover:text-gray-200 transition-colors"
            target="_blank"
          >
            <XIcon />
          </Link>
          <Link
            href={SOCIAL_LINKS.facebook}
            className="text-footer-link hover:text-gray-200 transition-colors"
            target="_blank"
          >
            <FacebookIcon />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-2 text-footer-link">
          <p>{CONTACT_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
