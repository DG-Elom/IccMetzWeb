"use server";

import { ContactUsFormValues } from "./ContactUsForm";

export const CreateContact = async (values: ContactUsFormValues) => {
  console.log("CreateContact");
  return "is good";
};
