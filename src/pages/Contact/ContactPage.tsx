import { useEffect, useState } from "react";

import "./ContactPage.css";

import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactMap from "../../components/contact/ContactMap/ContactMap";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import Testimonials from "../../components/contact/Testimonials/Testimonials";
import ServiceStats from "../../components/contact/ServiceStats/ServiceStats";

import { contactData } from "../../data/contactData";
import { fetchContact } from "../../services/contactApi";

import Container from "../../components/common/Container/Container";

function ContactPage() {
  const [cmsContact, setCmsContact] = useState<
    Awaited<ReturnType<typeof fetchContact>>
  >(null);

  useEffect(() => {
    fetchContact()
      .then(setCmsContact)
      .catch(() => setCmsContact(null));
  }, []);

  const address = cmsContact?.address || contactData.address;

  const phone = [
    ...(cmsContact?.phone ? [cmsContact.phone] : []),
    ...(cmsContact?.call_center
      ? [`Call Center ${cmsContact.call_center}`]
      : []),
  ];

  const email = cmsContact?.email
    ? [cmsContact.email]
    : contactData.email;

  const officeHours =
    cmsContact?.service_hours || contactData.officeHours;

  const mapEmbed =
    cmsContact?.maps_url || contactData.map.embed;

  return (
    <main className="contact-page">
      <ContactHero />

      <section className="contact-page__content">
        <Container>

          {/* ===============================
              INFORMASI KONTAK
          =============================== */}

          <ContactInfo
            address={address}
            phone={phone.length ? phone : contactData.phone}
            email={email}
            website={contactData.website}
            officeHours={officeHours}
          />

          {/* ===============================
              FORM KRITIK & SARAN
          =============================== */}

          <ContactForm />

          {/* ===============================
              STATISTIK PELAYANAN
          =============================== */}

          <ServiceStats />

          {/* ===============================
              TESTIMONI MASYARAKAT
          =============================== */}

          <Testimonials />

          {/* ===============================
              GOOGLE MAPS
          =============================== */}

          <ContactMap
            embed={mapEmbed}
            latitude={contactData.map.latitude}
            longitude={contactData.map.longitude}
            showMap={contactData.map.show}
          />

        </Container>
      </section>
    </main>
  );
}

export default ContactPage;