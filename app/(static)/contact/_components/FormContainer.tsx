import Container from "@/components/Container";
import React from "react";
import ContactForm from "./ContactForm";
import ImageForm from "./ImageForm";

const FormContainer = () => {
  return (
    <div className="pb-20">
      <Container>
        <div className="flex flex-col-reverse gap-5 md:flex-row md:justify-between">
          <ImageForm />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default FormContainer;
