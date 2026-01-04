import { products } from "../data/products";
import CarteProduit from "../components/CarteProduit";

function Home({onAddToCart}) {
    return(
        <div className="min-h-screen bg-gray-100">
            
            {/* ================ SECTION 1 : BANNIÈRE HERO ================= */}
            <div className="relative w-full h-[400px]">
                <img 
                    src="https://cdn-kbogl.nitrocdn.com/AbvhSakynrVOIgIpkGhkwCCbthSKbCeK/assets/images/optimized/rev-8b69cf2/as2.ae/wp-content/uploads/2024/10/gadget-devices.webp"
                    alt="Bannière Tech"
                    className="w-full h-full object-cover"
                />

                {/* Ce bloc crée un filtre noir transparent pour que le texte soit lisible*/}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                            <h1 className=" text-5xl font-bold mb-4"> La Tech à portée de main</h1>
                            <p className="text-xl">Découvrez nos meilleures offres gaming et audio</p>
                            <button className="mt-6 bg-yellow-500 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-700 transition">
                                Achetez MAINTENANT !!
                            </button>
                        </div>
                        
                    </div>
            </div>

            {/* --- FIN DE LA BANNIÈRE ( HERO SECTION) --- */ }
            
            
        {/* ================= SECTION 2 : GRILLE PRODUITS ================= */}
            <div className="text-center mb-10">
                <h1 className="mt-11 text-4xl font-bold text-gray-800">
                Bienvenue à la Mini Boutique ! 🛍️
                </h1>
                <p className="text-2xl mt-2 text-gray-600">Nos Produits Vedettes :</p>
            </div>

            <div className="px-52 pb-30">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((p)=>(
                        <CarteProduit
                            key={p.id}
                            nom={p.nom}
                            prix={p.prix}
                            image={p.image}
                            onAdd={()=>onAddToCart(p)}
                        />            
                    
                    ))}
                </div>
            </div>

        {/* ================= NOUVELLE SECTION 3 : ARTICLE TECH ================= */}
        {/* J'ai mis un fond blanc (bg-white) pour trancher avec le gris du dessus */}
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-10 flex flex-row items-center gap-8">
                        
                {/* --- Bloc GAUCHE : IMAGE (Prend 50% de la largeur, ou w-1/2)--- */}
                {/* md:w-1/2 signifie : sur écran moyen et plus, prend la moitié de la largeur */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://www.icertis.com/globalassets/1.-sections/contracting-basics/conversational-ai/conversational-ai-learn-article-header-inset.jpeg"
                        alt="Article Tech"
                        className="rounded-2xl shadow-2xl mr-4 rotate-2 hover:rotate-0 transition duration-500 ease-in-out"
                    />
                </div>
                    
                {/* --- Bloc DROITE : TEXTE (Prend 50% de la largeur, ou w-1/2)--- */}
                <div className="w-1/2">
                    <div className="w-20 h-2 bg-yellow-500 mb-6"></div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                        L'essor de l'IA dans la technologie grand public
                    </h2>

                     {/* Petite Barre Décorative */}   
                    <div className="w-20 h-2 bg-yellow-500 mb-6"></div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L'intelligence artificielle (IA) transforme rapidement le paysage technologique,
                        s'intégrant de plus en plus dans les produits grand public. Des assistants vocaux
                        aux appareils domestiques intelligents, l'IA améliore l'expérience utilisateur
                        en rendant les appareils plus intuitifs et réactifs. Cette révolution technologique
                        ouvre la voie à une nouvelle ère d'innovation, où la personnalisation et l'efficacité
                        sont au cœur des préoccupations des consommateurs.
                    </p>

                    <button className="border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
                        Lire la suite Si vous voulez voulez en savoir plus sur notre vision !
                    </button>
                </div>
            </div>
        </div>    

        </div>
    );
}
export default Home;