import { products } from "../data/products";
import CarteProduit from "../components/CarteProduit";
//import videoFile from "../assets/Humain-Ai.mp4";

function Home({onAddToCart}) {
    return(
        <div className="min-h-screen bg-gray-100">
            
            {/* ================ SECTION 1 : BANNIÈRE HERO ================= */}
            <div className="relative w-full h-[400px]">
                <img 
                    src="https://c.pxhere.com/photos/63/4b/computer_Designer_Entrepreneur_Internet_Job_Jobs_Marketing_Mentor-1618027.jpg!d"
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
            <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
                        
                {/* --- Bloc GAUCHE : IMAGE (Prend 50% de la largeur, ou w-1/2)--- */}
                {/* md:w-1/2 signifie : sur écran moyen et plus, prend la moitié de la largeur */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://www.icertis.com/globalassets/1.-sections/contracting-basics/conversational-ai/conversational-ai-learn-article-header-inset.jpeg"
                        alt="Article Tech"
                        className="rounded-2xl shadow-2xl w-full rotate-2 hover:rotate-0 transition duration-500 ease-in-out"
                    />
                </div>
                    
                {/* --- BLOC 1 DROITE : TEXTE (Prend 50% de la largeur, ou w-1/2)--- */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-2xl">
                    {/*<div className="w-20 h-2 bg-yellow-500 mb-6"></div>*/}
                    <div className="flex items-center space-x-2 mb-4">
                         <span className="h-1 w-10 bg-yellow-500"></span>
                         <span className="text-yellow-600 font-bold uppercase text-sm tracking-widest">Innovation</span>
                    </div>

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
                        Lire la suite Si vous voulez voulez en savoir plus sur notre vision ! &rarr;
                    </button>
                </div>
            </div>
        </div>


        {/* ================= NOUVELLE SECTION 4 : ARTICLE HUMAIN ================= */}
        {/* J'ai mis un fond jaune (bg-yellow) pour trancher avec le gris du dessus */}
        <div className="py-20 bg-yellow-600">
            <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center gap-8">
                
                    
                {/* --- Bloc GAUCHE : TEXTE (Prend 50% de la largeur, ou w-1/2)--- */}
                <div className="w-1/2">
                    <div className="w-20 h-2 bg-yellow-500 mb-6"></div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                        Ai avec l'humanité : Vers une technologie plus empathique
                    </h2>

                     {/* Petite Barre Décorative */}   
                    <div className="w-20 h-2 bg-yellow-500 mb-6"></div>

                    <p className="text-rg text-gray-700 leading-relaxed mb-6">
                        Alors que l'IA continue de progresser, il est crucial de veiller à ce qu'elle
                        soit développée avec une compréhension profonde des besoins humains. L'avenir
                        de la technologie réside dans sa capacité à non seulement automatiser les tâches,
                        mais aussi à comprendre et à répondre aux émotions humaines. En intégrant des
                        principes éthiques et empathiques dans la conception de l'IA, nous pouvons créer
                        des technologies qui enrichissent véritablement la vie des utilisateurs.
                    </p>

                    <button className="border-2 border-yellow-100 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
                        Lire la suite Si vous voulez voulez en savoir plus sur notre vision !
                    </button>
                </div>

                {/* --- BLOC DROITE : IMAGE (Prend 50% de la largeur, ou w-1/2)--- */}
                {/* md:w-1/2 signifie : sur écran moyen et plus, prend la moitié de la largeur */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://www.azuremagazine.com/wp-content/uploads/2020/04/Azure-Yves-Behar-Moxie-Robot-3.jpg"
                        alt="Article Tech"
                        className="rounded-2xl shadow-2xl ml-4 rotate-2 hover:rotate-0 transition duration-500 ease-in-out"
                    />
                </div>
            </div>
        </div>    


        {/*================= NOUVELLE SECTION 4 : VIDÉO DÉCO ================= */}
        <div className="bg-white py-11"></div>
        <div className="bg-pink-300 py-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8"> Immersion Totale</h2>
            <div className="max-w-4xl mx-auto px-4">
                <div className="w-full relative">
                    <iframe
                        className="w-full h-[300px] md:h-[500px] rounded-xl shadow-2xl border-4 border-gray-800"
                        src="https://www.youtube.com/embed/fa8k8IQ1_X0"
                        title="Vidéo Ai"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/*
                    <video
                        className="w-full rounded-xl shadow-2xl border-4 border-gray-800"
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        {/* Vidéo exemple libre de droits 
                        <source src="/Ai.mp4" type="video/mp4"/>
                        Votre navigateur ne supporte pas la lecture de vidéos.
                     </video>
                     */}
                </div>
                <p className="text-gray-50 mt-4 italic"> Découvrez la puissance de nos technologies</p>
            </div>
        </div>


     </div>
    );
}
export default Home;