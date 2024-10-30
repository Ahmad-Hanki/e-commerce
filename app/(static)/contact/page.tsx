import React from "react";
import FormContainer from "./_components/FormContainer";
import ContactData from "./_components/Contactdata";
import Location from "./_components/Location";

const ContactPage = () => {
  return (
    <div>
      <ContactData
        address="25 Aralık, Tüfekçi Yusuf Blv. No:86, 27100 Şahinbey/Gaziantep"
        contactData="Contact Us"
        email="email@provider.com"
        phone="+90 999 999 9 99 "
      />
      <FormContainer />

      <Location />
    </div>
  );
};

export default ContactPage;
