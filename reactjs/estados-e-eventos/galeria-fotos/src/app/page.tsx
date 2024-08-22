//Por conta do Next, no futuro veremos melhor
"use client"

import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";
import { Modal } from "@/components/Modal";

const Page = () => {
  /* State que controla o modal */
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  /* Função para abrir modal */
  /* Baseado no id vai preencher a imagem e mostrar o modal */
  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if (photo) {
      setImageModal(photo.url);
      setShowModal(true);
    }
  }

  /* Função para fechar */
  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10 ">Fotos Espaciais</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem key={item.id} photo={item} onClick={() => openModal(item.id)}
          />
        ))}
      </section>
      {showModal &&
        <Modal image={imageModal} closeModal={closeModal} />
      }

    </div>
  );
}

export default Page;