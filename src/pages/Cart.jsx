function Cart({cart, onDecrease}) {
    const total = cart.reduce((sum, item) => {
        return sum + item.prix * item.quantity
    },0); 

    return(
        <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-11"> PANIER </h1>

            {cart.length == 0  
                ? (<p className="mt-4 text-gray-600">VOTRE PANIER.</p>) 
                : (
                    <div className="w-full max-w-2xl bg-white p-6 shadow-md rounded-lg">
                        <ul className="space-y-3">
                            {cart.map((item) => (
                                <li key={item.id} className="border p-3 rounded justify-between items-center bg-gray-50">
                                    <span className="font-medium">{item.nom} - {item.prix} MAD * {item.quantity}</span>

                                    <button
                                      onClick={() => onDecrease(item)}
                                      className="text-red-600 hover:text-orange-400 font-bold ml-4"
                                      title="Supprimer le produit"                  
                                    >
                                      ✕ -- ✕
                                    </button>
                                </li>
                                )
                            )}
                        </ul>
                        <div className="mt-6 text-right text-xl font-bold border-t pt-4">
                            Total: {total} MAD
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Cart;