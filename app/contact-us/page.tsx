import ContactUsForm from "@/app/contact-us/ContactUsForm";
import { CreateContact } from "./contact-us.action";
import { Input } from "@/components/ui/input";

function ContactUsPage() {
  return (
    <section className="container px-24 flex flex-col items-center gap-3">
      <h1 className="text-8xl font-bold py-[6rem]">Contactez-nous!</h1>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Urna condimentum
        mattis pellentesque id. Id aliquet lectus proin nibh nisl condimentum id
        venenatis a. Vitae congue mauris rhoncus aenean. Massa id neque aliquam
        vestibulum morbi blandit. Feugiat vivamus at augue eget arcu. Malesuada
        proin libero nunc consequat interdum varius sit amet. Vel eros donec ac
        odio tempor orci dapibus. Hac habitasse platea dictumst vestibulum
        rhoncus. Arcu cursus vitae congue mauris rhoncus. A erat nam at lectus
        urna duis. Vulputate dignissim suspendisse in est ante. Duis tristique
        sollicitudin nibh sit amet commodo nulla facilisi nullam. Tristique
        senectus et netus et malesuada fames. Non diam phasellus vestibulum
        lorem sed risus. Euismod quis viverra nibh cras pulvinar. Tempor orci eu
        lobortis elementum nibh tellus molestie nunc non. Arcu bibendum at
        varius vel pharetra. Nunc faucibus a pellentesque sit amet porttitor
        eget.
      </p>

      <div className="">
        <ContactUsForm onSubmit={CreateContact} />
      </div>
    </section>
  );
}

export default ContactUsPage;
