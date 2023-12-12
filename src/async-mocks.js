const products = [
    {
        "id": 1,
        "title": "Perro Pandillero",
        "price": 1.78,
        "description": "¡Este intrépido Pitbull lleva la correa de la ley por el lado salvaje! Con su mirada feroz y su actitud desafiante, este canino pandillero está listo para liderar su propia manada.",
        "category": "Pitbull",
        "image": require("./componentes/assets/Perro1.jpeg"),
        "stock": 8,
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Perro Bulldog Pandillero",
        "price": 1.85,
        "description": "¡Este Bulldog es más duro que las calles! Con su mirada seria y su postura imponente, este pandillero canino es el compañero perfecto para quienes buscan un NFT con actitud y estilo.",
        "category": "Bulldog",
        "image": require("./componentes/assets/Perro2.jpeg"),
        "stock": 3,
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 3,
        "title": "Perro Millonario",
        "price": 1.97,
        "description": "¡Con corbata elegante y actitud de alto vuelo, este perro millonario es la personificación del lujo perruno! Adquiere este NFT para añadir un toque de sofisticación a tu colección.",
        "category": "Chihuahua",
        "image": require("./componentes/assets/Perro3.jpeg"),
        "stock": 7,
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 4,
        "title": "Perro Tatuado",
        "price": 2.87,
        "description": "Este Border Collie ha estado del lado equivocado de la ley, ¡pero su astucia y agilidad son inigualables! Su mirada intensa y su pelaje distintivo hacen de este NFT una obra maestra única.",
        "category": "Border Collie",
        "image": require("./componentes/assets/Perro4.jpeg"),
        "stock": 5,
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 5,
        "title": "Perro Super Heroe",
        "price": 2.65,
        "description": "¡Con capa ondeante y ojos llenos de determinación, este Doberman es más que un simple perro! Es el superhéroe canino que necesitas en tu colección de NFT. ¿Estás listo para unirte a su lucha por la justicia?",
        "category": "Doberman",
        "image": require("./componentes/assets/Perro5.jpeg"),
        "stock": 4,
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500);
    })
}