import Link from "next/link";
import Image from "next/image";

import { Books } from "../data/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="grid gap-8 grid-cols-2 justify-center">
        {Books.map((book) => (
          <div key={book.id}>
            <Image
              src={book.img}
              alt="Picture of the author"
              width={150}
              height={150}
              className="rounded-lg shadow-lg object-cover object-center overflow-hidden mb-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl  hover:rounded-xl  hover:opacity-80  hover:cursor-pointer "
            />
            <Link
              className="text-xl font-bold text-black hover:text-gray-500 dark:text-gray-200 transition duration-300 ease-in-out"
              href={`${book.href}`}
              target="_blank"
            >
              {book.title}
            </Link>
            <div>
              <span className="text-gray-500 dark:text-gray-400">By {book.author}</span>
              <div className="">
                <span className="text-gray-500 dark:text-gray-500">Price: </span>
                <span className="text-xl font-bold dark:text-gray-400">${book.price}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-300  line-clamp-3">
                  {book.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
