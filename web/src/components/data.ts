export const categoriesData = [
    {
        id: 1,
        title: "Meninos",
        img: "https://images.pexels.com/photos/10032933/pexels-photo-10032933.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: 2,
        title: "Meninas",
        img: "https://images.pexels.com/photos/2261282/pexels-photo-2261282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 3,
        title: "Noivado",
        img: "https://images.pexels.com/photos/6263128/pexels-photo-6263128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 4,
        title: "Batizado",
        img: "https://images.pexels.com/photos/10032933/pexels-photo-10032933.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: 5,
        title: "Revelação de sexo",
        img: "https://images.pexels.com/photos/2261282/pexels-photo-2261282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 6,
        title: "Heróis",
        img: "https://images.pexels.com/photos/6263128/pexels-photo-6263128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 7,
        title: "Heroínas",
        img: "https://images.pexels.com/photos/10032933/pexels-photo-10032933.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: 8,
        title: "Infantis",
        img: "https://images.pexels.com/photos/2261282/pexels-photo-2261282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

interface ProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    img: string;
    category: number[];
}

export const productsData: ProductData[] = [
    {
        id: 1,
        title: "Batman",
        img: "/batman.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 2,
        title: "Masha e o Urso",
        img: "/urso.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 3,
        title: "Arca de noé",
        img: "/arca_de_noe.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 4,
        title: "Capitão América",
        img: "/capitao_america2.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 5,
        title: "Baby Dino",
        img: "/dino.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 6,
        title: "Flash",
        img: "/flash.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 7,
        title: "Lady Bug",
        img: "/lady_bug.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 8,
        title: "Vingadores",
        img: "/vingadores.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 9,
        title: "Jardim Encantado",
        img: "/jardim_encantado.jpg",
        price: 150,
        category: [1, 6, 8],
    },
    {
        id: 10,
        title: "Hot Wheels",
        img: "/hot_wheels.jpg",
        price: 150,
        category: [1, 6, 8],
    },
];

export const announcements =
    "Descontos de 10% nos pacotes Luxo no mês de Novembro. Cupom de desconto: #NOV10";

export const sliderData = [
    {
        img: "/pequena_sereia.jpg",
        title: "A festa perfeita com o seu estilo",
        description: "Temas variados para todos os tipos de eventos",
        btnText: "ENCONTRE O TEMA PARA SUA FESTA",
    },
    {
        img: "/jardim_encantado.jpg",
        title: "TEMAS DIFERENCIADOS",
        description: "Enfeites feitos a mão",
        btnText: "MOSTRE ME MAIS",
    },
];
