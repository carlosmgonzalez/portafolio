"use client";

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Language } from "@/interfaces/languages";

export const FormCard = ({ info }: { info: Language }) => {
  const data = info.formulario;

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/api/send-mail", data);
      reset();
      setIsLoading(false);
      toast({
        title: "Message sent",
        description: "Thanks for contacting me",
      });
    } catch (error) {
      toast({
        title: "Error sending the message",
        description: "Try later",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`h-full w-full bg-orange-700 rounded-2xl p-5 shadow-md shadow-neutral-800 opacity-90
      col-span-12 lg:col-span-8
      flex flex-col gap-2`}
    >
      <h2 className="">
        <span className="text-lg font-medium">{data.titulo} 📬</span>
        <br />
        <span>{data.description}</span>
      </h2>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        id="formContact"
      >
        <div className="flex flex-col gap-y-1">
          <Input
            type="name"
            placeholder="Juan"
            {...register("name", {
              required: { value: true, message: data.errorNombre },
            })}
          />
          {formState.errors.name && (
            <p className="text-xs font-light text-white">
              {formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <Input
            type="email"
            // className="bg-neutral-500"
            placeholder="juan@gmail.com"
            {...register("email", {
              required: { value: true, message: data.errorEmail },
            })}
          />
          {formState.errors.email && (
            <p className="text-xs font-light text-white">
              {formState.errors.email.message}
            </p>
          )}
        </div>

        <Textarea placeholder={data.placeholder} {...register("message")} />
        <Button
          type="submit"
          variant="default"
          form="formContact"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : data.button}
        </Button>
      </form>
    </div>
  );
};
