export default function Header() {
  return (
    <nav>
      <div className="flex justify-between items-center py-4">
        <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
                <a className="text-xl font-bold text-black dark:text-gray-500" href="/">Home</a>
                <a className="text-xl font-bold text-black dark:text-gray-500" href="/profile">Profile</a>
            </div>
        </div>
      </div>
    </nav>
  );
}
