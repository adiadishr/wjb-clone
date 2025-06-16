import AuxHero from "@/components/aux-hero";
import { Lock } from "lucide-react";

export default function Page() {
  return (<>
    <AuxHero title={'Privacy Policy'} objPosition="object-[0%_50%]" src="/mad-max.jpeg" shape={Lock} shapeColor="bg-gradient-to-br from-primary to-yellow-300" />
    <div className="bg-white pb-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Our Commitment
        </h3>
        <p className="mb-4 leading-7 text-paragraph">
          At Hayes Plant Hire, protecting your privacy is paramount. We are dedicated to safeguarding your personal information while providing a personalized and valuable service.
        </p>
        <p className="mb-4 leading-7 text-paragraph">
          This Privacy Policy outlines how Hayes Plant Hire collects, processes, and protects your data. Should you have any questions or wish to exercise your data rights, please contact our Privacy Officer via email.
        </p>
        <p className="mb-12 leading-7 text-paragraph">
          Please note, our website may contain links to third-party sites which are not governed by this Privacy Policy. We recommend reviewing their policies separately.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Information Collected
        </h3>
        <p className="mb-4 leading-7 text-paragraph">
          We collect and process personal data necessary to provide and improve our services. Our practices comply with applicable data protection laws, ensuring your information is handled responsibly and securely.
        </p>
        <p className="mb-12 leading-7 text-paragraph">
          Again, third-party websites linked on our site are outside of our control, and we encourage you to review their privacy terms.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Updates to Our Privacy Policy
        </h3>
        <p className="mb-4 leading-7 text-paragraph">
          We periodically update this Privacy Policy to reflect changes in our practices or legal requirements. We encourage you to revisit this page regularly to stay informed of any updates.
        </p>
        <p className="mb-12 leading-7 text-paragraph">
          Continued use of our services after such changes constitutes your acceptance of the updated policy.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Your Consent
        </h3>
        <p className="leading-7 text-paragraph">
          By using our website and services, you consent to the collection and use of your personal data as described in this Privacy Policy. If you do not agree, please refrain from using our site.
        </p>
      </div>
    </div>
  </>
  )
}