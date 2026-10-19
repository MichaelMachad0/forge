import { WhatsappIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";

export function WhatsappButton() {
  return (
    <a
      href={siteConfig.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conversar no WhatsApp com ${siteConfig.person.name}`}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-foreground shadow-[0_10px_30px_-8px_var(--primary)] md:hidden"
    >
      <WhatsappIcon size={26} />
    </a>
  );
}
