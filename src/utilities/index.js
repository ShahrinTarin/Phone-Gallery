import toast from "react-hot-toast"

export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) return JSON.parse(favorites)
    return []
}


export const addFavorite = phone => {
    const favorites = getFavorites()
    const isExist = favorites.find(p => p.id === phone.id)
    if (isExist) return toast.error('This Phone is already exist in your Favorites list');
    favorites.push(phone)
    toast.success('Phone added to your Favorites')
    localStorage.setItem('favorites', JSON.stringify(favorites))
}


export const removeFavorite = id => {
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites',JSON.stringify(remainingFavorites))
    toast.success('Phone remove from your Favorites')
}




export const getCarts = () => {
    const carts = localStorage.getItem('carts')
    if (carts) return JSON.parse(carts)
    return []
}


export const addCart = phone => {
    const carts = getCarts()
    const isExist = carts.find(p => p.id === phone.id)
    if (isExist) return toast.error('This Phone is already exist in your Cart');
    carts.push(phone)
    toast.success('Phone added to your Cart')
    localStorage.setItem('carts', JSON.stringify(carts))
}


export const removeCart = id => {
    const carts = getCarts()
    const remainingCarts = carts.filter(phone => phone.id !== id)
    localStorage.setItem('carts',JSON.stringify(remainingCarts))
    toast.success('Phone remove from your Cart')
}