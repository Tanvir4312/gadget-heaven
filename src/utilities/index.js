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
        return toast.error('Already Add this item')
    }
    else {
        card.push(id)
        const cardStr = JSON.stringify(card)
        localStorage.setItem('card', cardStr)
        toast.success('Successfully Add to Add Card')
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
        return toast.error('You have already added to wishlist this item')
    }
    else {
        wishlistCard.push(id);
        const WishlistStr = JSON.stringify(wishlistCard);
        localStorage.setItem('wish-cards', WishlistStr)
        toast.success('Successfully Add to Wishlist')
    }
}

export { addToAddCard, getStoredToAddCard, addToWishlist, getStoredWishlist }