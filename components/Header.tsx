export default function Header() {
  return (
    <nav>
      <div className="flex justify-between items-center py-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <a className="text-xl font-bold text-black dark:text-gray-500" href="/">Home</a>
            </div>
        </div>
      </div>
    </nav>
  );
}
