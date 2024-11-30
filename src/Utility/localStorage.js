export const saveAddToLocalStorageReadBookData=(clickedBookInfo)=>{
    const saveAddToReadBookData=JSON.parse(localStorage.getItem("readBooks")) || [] ;
      const isSaveAddToReadBookData=saveAddToReadBookData.find(addToReadBook=>addToReadBook.bookId===clickedBookInfo.bookId);
      
        if(!isSaveAddToReadBookData){
        // return("You have successfully added this book in readlist");
        saveAddToReadBookData.push(clickedBookInfo);
        const setLocalValue=JSON.stringify(saveAddToReadBookData);
        localStorage.setItem("readBooks",setLocalValue);
        return(true);
    }
    return(false);
}
export const checkIfBookAlreadyInReadList=(clickedBookInfo)=>{
    const readListBookData=JSON.parse(localStorage.getItem("readBooks")) || [] ;
    const isBookInReadBookData=readListBookData.find(book=>book.bookId===clickedBookInfo.bookId);

    if(isBookInReadBookData){
        return(true)
    }
    }
export const saveAddToLocalStorageWishListBookData=(clickedBookInfo)=>{
    const saveAddToWishListBookData=JSON.parse(localStorage.getItem("wishList")) || [] ;
    const isSaveAddToWishListBookData=saveAddToWishListBookData.find(addToWishListBook=>addToWishListBook.bookId===clickedBookInfo.bookId);

    if(!isSaveAddToWishListBookData){
      saveAddToWishListBookData.push(clickedBookInfo);
      const setLocalValue=JSON.stringify(saveAddToWishListBookData);
      localStorage.setItem("wishList",setLocalValue);
      return(true);
      }
      return(false)
}

export const getReadBookDataFromLocalStorage=()=>{
    const getStoreReadBookdData=JSON.parse(localStorage.getItem("readBooks")) || [];
    return(getStoreReadBookdData)
}
export const getWishListBookDataFromLocalStorage=()=>{
    const getStoredWishListData=JSON.parse(localStorage.getItem("wishList")) || [];
    return(getStoredWishListData)
}