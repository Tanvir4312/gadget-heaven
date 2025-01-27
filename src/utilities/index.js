import { toast } from "react-toastify";

const getStoredToAddCard = () => {
    const storedAddCardStr = localStorage.getItem('card');

    if (storedAddCardStr) {
        const storedAddCard = JSON.parse(storedAddCardStr)
        return storedAddCard
    }
    else {
        return []
    }
}

const addToAddCard = id => {
    const card = getStoredToAddCard();


    if (card.includes(id)) {
        return toast.error('Already Add')
    }
    else {
        card.push(id)
        const cardStr = JSON.stringify(card)
        localStorage.setItem('card', cardStr)
        toast.success('Successfully Add')
    }

}

const getStoredWishlist = () => {
    const storedWishlistStr = localStorage.getItem('wish-cards')

    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist
    }
    else {
        return []
    }
}

const addToWishlist = id => {
    const wishlistCard = getStoredWishlist();

    if (wishlistCard.includes(id)) {
        return toast.error('Already Add')
    }
    else {
        wishlistCard.push(id);
        const WishlistStr = JSON.stringify(wishlistCard);
        localStorage.setItem('wish-cards', WishlistStr)
        toast.success('Successfully Add')
    }
}

export { addToAddCard, getStoredToAddCard, addToWishlist, getStoredWishlist }