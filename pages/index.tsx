// Next.js
import Image from "next/image";

// React
import { useState } from "react";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form"

// Types
import { ContactFormInputsType } from "../utils/forms/types";

// Custom components
import Layout from "../components/Layout";
import { FormButton } from "../components/forms/FormButton";
import { FormTextArea } from "../components/forms/FormTextArea";
import { FormTextInput } from "../components/forms/FormTextInput";
import { FormElementErrorMessage } from "../components/forms/FormElementErrorMessage";

/**
 * Component to represent the Home/About Me page layout. Contains a common navbar header on the top of the page,
 * an image and description of myself, a custom-styled contact form with validation and a mocked API call,
 * and a common footer.
 * 
 * @returns Component containing the Home/About Me page layout
 */
export default function Home() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<ContactFormInputsType>({mode: "onBlur"});
  const [contactFormResponse, setContactFormResponse] = useState<string>("");

  /**
   * Handles sending a mocked API request when the "Submit" button is clicked.
   */
  const onSubmit: SubmitHandler<ContactFormInputsType> = () => {
    // Asynchronous wrapper function for the API call when the contact form is submitted
    const submitForm = async () => {
      const response = await fetch("/api/contact", {
        method: "POST"
      });

      return response.json();
    };

    submitForm().then((response) => {
      setContactFormResponse(response.message);
    });
  };

  /**
   * Handles resetting form data + hiding the "Sent" text (if displayed) when the "Reset"
   * button is clicked.
   */
  const handleReset = () => {
    reset();
    setContactFormResponse("");
  };

  return (
    <Layout centerVertically>
      <Image src="/me.jpeg" width={300} height={400} alt="Picture of myself!" className="rounded-3xl" />
      <h1 className="opacity-75">Spencer Plasse</h1>

      <p className="w-1/2 text-center">
        Hey there! My name is Spencer Plasse. I&apos;m a 21 year old software developer living in Mobile, AL.
        I graduated from the University of South Alabama in December 2021 and have been a
        consultant at CGI in Mobile since January 2022 (a year and a half).
      </p>

      <p className="w-1/2 text-center -mt-1">
        In my free time, I am almost always listening to music. My favorite genres are alt/indie, country, and
        video game soundtracks. I play piano and some guitar/bass and also like to compose my own music.
      </p>

      <p className="w-1/2 text-center -mt-1">
        I&apos;m an avid PC and Nintendo Switch gamer as well. My favorite games include Minecraft, Undertale,
        Hollow Knight, Rocket League, Don&apos;t Starve Together, and Enter the Gungeon.
      </p>

      <h2 className="opacity-75 -mb-2">Contact Me</h2>
      <p className="mb-6">
        Submit the form below to contact me via email. I will get back with you as soon as I am able!
      </p>

      <form method="post" onSubmit={handleSubmit(onSubmit)}
          className="w-1/3 border-slate-500 border-2 rounded-md border-solid p-8">
        <div className="mb-4">
          <FormTextInput id="name" name="name" placeholder="First Last" labelText="Name"
            required register={register} />
          {errors.name && <FormElementErrorMessage errorMessage={errors.name.message!}/>}
        </div>
        
        <div className="mb-4">
          <FormTextInput id="emailAddress" type="email" name="emailAddress" placeholder="test@example.com"
            labelText="Email Address" required register={register} />
          {errors.emailAddress && <FormElementErrorMessage errorMessage={errors.emailAddress.message!} />}
        </div>

        <div className="mb-4">
          <FormTextArea id="message" name="message" placeholder="Enter a message to send here!"
            labelText="Message" rows={4} cols={25} required register={register} />
          {errors.message && <FormElementErrorMessage errorMessage={errors.message.message!} />}
        </div>

        <div className="text-center mb-4">
          <FormButton type="submit" buttonText="Send" position="inline" />
          <FormButton type="reset" buttonText="Reset" handleClick={handleReset} position="inline" />
        </div>

        {contactFormResponse && <span className="flex justify-center">{contactFormResponse}</span>}
      </form>
    </Layout>
  )
}