export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* ================ */}
                {/* Logo ou Titre */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-yellow-50">Mini Boutique</h2>
                    <p className="text-sm text-gray-400"> La technologie à votre service</p>
                </div>

                {/* ================ */}
                {/* Liens rapides */}
                <div className="flex space-x-6 mb-4">
                    <a href="/" className="text-gray-400 hover:text-white transition">Mentions Légales</a>
                    <a href="/about" className="text-gray-400 hover:text-white transition">Contact</a>
                    <a href="/cart" className="text-gray-400 hover:text-white transition">Livraison</a>
                </div>

                {/* ================ */}
                {/* Réseaux sociaux */}
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                {/* ================ */}
                {/* Copyright */}
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Mini Boutique. Tous droits réservés.
                </div> 
            </div>
        </footer>
    );
}