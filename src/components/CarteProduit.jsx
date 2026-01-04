// Dossier components/CarteProduit.jsx
export default function CarteProduit({ nom, prix, image, onAdd }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img 
        src={image} 
        alt={nom} 
        className="w-full h-40 object-cover rounded-md mb-4" 
      />
      <h2 className="text-lg font-bold text-gray-800">{nom}</h2>
      <p className="text-pink-600 font-semibold mb-4">{prix} MAD</p>
      
      <button 
        onClick={onAdd}
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 w-full font-medium"
      >
        Ajouter au panier
      </button>
    </div>
  );
}