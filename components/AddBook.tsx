"use client";
import { useState, useEffect } from "react";
import { Books } from "@/data/data";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

interface NewBook {
  title: string;
  author: string;
  description: string;
  image: string;
}

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();


  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Yeni kitap nesnesini oluşturun
    const newBook: NewBook = { title, author, description, image };

    // Veriyi güncellemek için uygun işlemleri burada gerçekleştirin
    // Örneğin, veriyi eklemek için `data.tsx` içindeki bir işlevi çağırabilirsiniz.
    // Örnek:
    // import { addBook } from '../data';
    // addBook(newBook);

    // Başarılı bir şekilde kitap ekledikten sonra ana sayfaya yönlendirin.
    router.push("/");
  };

  useEffect(() => {
    // Burada useEffect içinde router'ı kullanabilirsiniz
  }, []); // useEffect'i boş bağımlılık dizisi ile çağırın

  if (!session) {
    // Kullanıcı oturum açmamışsa, giriş sayfasına yönlendirin
    router.push("/signin");
    return null;
  }

  return (
    <div>
      <h1>Kitap Ekle</h1>
      <form onSubmit={handleSubmit}>
        {/* Kitap eklemek için gerekli form alanlarını buraya ekleyin */}
        <label>
          Kitap Adı:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        {/* Diğer form alanları */}
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}
