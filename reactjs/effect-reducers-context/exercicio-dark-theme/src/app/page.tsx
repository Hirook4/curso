"use client"

import { Container } from "@/components/Container";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Button } from "@/components/Button";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <ThemeProvider>
      <ThemeSwitch></ThemeSwitch>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Titulo</h1>
        </header>
        <section>
          <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus neque ipsam dolore praesentium, voluptates porro! Odit praesentium rem odio illo omnis dignissimos sint illum voluptas laborum magni perferendis, quasi numquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dicta quam, illo ullam, hic iure sint, cumque beatae possimus voluptatum ex quis explicabo accusamus! Laudantium enim incidunt dicta vel recusandae?</p>
          <Button label="Botão" onClick={() => { }}>
          </Button>
        </section>
      </Container>
    </ThemeProvider>
  );
}
