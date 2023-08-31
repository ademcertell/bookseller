import Image from "next/image";
import Link from "next/link";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type Props = {
  user: User | undefined;
  pagetype: string;
  bookCount: number;
};

export default function ProfileCard({ user, pagetype, bookCount }: Props) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <div className="relative w-28 h-28 rounded-full overflow-hidden">
        {user?.image ? (
          <Image
            src={user.image}
            layout="fill"
            objectFit="cover"
            alt={user?.name ?? "Profile"}
          />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <span className="text-gray-500 text-2xl">👤</span>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold">{user?.name}</h2>
      <p className="text-gray-600">{user?.email}</p>

      <p className="text-gray-500">Toplam {bookCount} kitap eklediniz.</p>
    </section>
  );
}