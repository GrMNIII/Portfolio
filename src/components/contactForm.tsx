"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mensaje enviado", description: "Gracias por contactarme.", status: "success" });
      setForm({ name: "", email: "", message: "" }); // Resetea el formulario
    }, 2000); // Simula 2 segundos de espera
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Ingresa tu nombre"
          value={form.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Ingresa tu email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje"
          value={form.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </div>
    </form>
  );
}
function toast(arg0: { title: string; description: string; status: string; }) {
    throw new Error("Function not implemented.");
}

