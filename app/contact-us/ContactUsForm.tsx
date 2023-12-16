"use client";

import { ContentTextArea } from "@/components/ui/ContentTextArea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
  firstname: z.string().min(1).max(500),
  lastname: z.string().min(1).max(500),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

export type ContactUsFormValues = z.infer<typeof Schema>;

type ContactUsFormProps = {
  onSubmit: (values: ContactUsFormValues) => Promise<string>;
};

const ContactUsForm = ({ onSubmit }: ContactUsFormProps) => {
  const form = useZodForm({
    schema: Schema,
  });
  return (
    <Form
      form={form}
      onSubmit={async (values) => {
        const postId = await onSubmit(values);
        console.log("Submit client side", postId);
        //router.push(`/posts/${postId}`);
      }}
      className="flex flex-col gap-2 w-full"
    >
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <Input {...field} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <Input {...field} />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input {...field} />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <ContentTextArea {...field} />
          </FormItem>
        )}
      />

      <div className="flex w-full justify-end mb-2">
        <Button size="sm">Envoyer</Button>
      </div>
    </Form>
  );
};

export default ContactUsForm;
