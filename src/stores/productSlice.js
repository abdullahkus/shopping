import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        brands: [
            {
                id: 1,
                name: 'American Eagle'
            },
            {
                id: 2,
                name: 'Pull & Bear'
            },
            {
                id: 3,
                name: 'Zara'
            },
            {
                id: 4,
                name: 'Hollister'
            }
        ],
        categories: [
            {
                id: 1,
                name: 'Hoodies'
            },
            {
                id: 2,
                name: 'Jeans'
            },
            {
                id: 3,
                name: 'Polos'
            },
            {
                id: 4,
                name: 'Shirts'
            }
        ],
        products: [
            {
                id: 1,
                categoryId: 1,
                brandId: 1,
                name: 'Gray Active Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Hoodie_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 50,
            },
            {
                id: 2,
                categoryId: 1,
                brandId: 2,
                name: 'Slogan Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FPb_Hoodie_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 40,
            },
            {
                id: 3,
                categoryId: 1,
                brandId: 2,
                name: 'Printed Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FPb_Hoodie_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 55,
            },
            {
                id: 4,
                categoryId: 1,
                brandId: 1,
                name: 'Green Utility Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Hoodie_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 52,
            },
            {
                id: 5,
                categoryId: 1,
                brandId: 2,
                name: 'Sky Blue Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FPb_Hoodie_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 42,
            },
            {
                id: 6,
                categoryId: 1,
                brandId: 1,
                name: 'White Utility Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Hoodie_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 41,
            },
            {
                id: 7,
                categoryId: 1,
                brandId: 4,
                name: 'Navy Colorblock Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Hoodie_4.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 39,
            },
            {
                id: 8,
                categoryId: 1,
                brandId: 4,
                name: 'Gray Colorblock Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Hoodie_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 37,
            },
            {
                id: 9,
                categoryId: 1,
                brandId: 4,
                name: 'Pink Icon Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Hoodie_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 26,
            },
            {
                id: 10,
                categoryId: 1,
                brandId: 4,
                name: 'Navy Tie-Dye Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Hoodie_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 25,
            },
            {
                id: 11,
                categoryId: 1,
                brandId: 1,
                name: 'Green Active Camo Hoodie',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Hoodie_4.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 59,
            },
            {
                id: 12,
                categoryId: 2,
                brandId: 1,
                name: 'Black Knee Slash Jeans',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Jeans_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 23,
            },
            {
                id: 13,
                categoryId: 2,
                brandId: 4,
                name: 'Light Skinny Jeans',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Jeans_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 45,
            },
            {
                id: 14,
                categoryId: 2,
                brandId: 3,
                name: 'Paint Splatter Jeans',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FZara_Jeans_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 45,
            },
            {
                id: 15,
                categoryId: 2,
                brandId: 3,
                name: 'Grey Cropped Jeans',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FZara_Jeans_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 35,
            },
            {
                id: 16,
                categoryId: 2,
                brandId: 2,
                name: 'Black Ripped Jeans',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FPb_Jeans_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 26,
            },
            {
                id: 17,
                categoryId: 2,
                brandId: 4,
                name: 'Black Skinny Jeans',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Jeans_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 28,
            },
            {
                id: 18,
                categoryId: 3,
                brandId: 1,
                name: 'Pink Icon Polo',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Polo_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 14,
            },
            {
                id: 19,
                categoryId: 3,
                brandId: 2,
                name: 'Burgundy Icon Polo',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Polo_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 13,
            },
            {
                id: 20,
                categoryId: 3,
                brandId: 3,
                name: 'Black Mint Icon Polo',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Polo_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 9,
            },
            {
                id: 21,
                categoryId: 3,
                brandId: 4,
                name: 'Burgundy Flex Polo',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Polo_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 11,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 1,
                name: 'White Pattern Shirts',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Shirt_5.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 24,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 1,
                name: 'Geometric Print Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FZara_Shirt_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 21,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 2,
                name: 'Stiped Print Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FZara_Shirt_5.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 19,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 2,
                name: 'Abstract Print Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FZara_Shirt_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 25,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 3,
                name: 'Striped Textured Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FZara_Shirt_6.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 26,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 3,
                name: 'burgandy Flannel Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FAe_Shirt_2.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 33,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 4,
                name: 'Navy Oxford Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Shirt_1.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 25,
            },
            {
                id: 22,
                categoryId: 4,
                brandId: 4,
                name: 'Blue Poplin Shirt',
                img: 'https://tiptopstore.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftiptop-store.appspot.com%2Fo%2FHollister_Shirt_3.jpg%3Falt%3Dmedia&w=1920&q=75',
                price: 26,
            },
        ],
    },
})

export default productSlice.reducer