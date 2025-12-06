export default function NotFound() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Error 404 - Page not found</h1>
      <p className="text-center">La page que vous cherchez n'existe pas ou n'est plus accessible.</p>
      <p className="text-center"><a href="" className="hover:text-red-800">Revenir en arrière</a></p>
    </main>
  );
}
