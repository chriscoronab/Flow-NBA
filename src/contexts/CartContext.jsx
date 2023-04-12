import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    if(!JSON.parse(localStorage.getItem("cart"))){
        localStorage.setItem("cart", JSON.stringify([]))
    };
    const cartInit = JSON.parse(localStorage.getItem("cart"));
    const [cart, setCart] = useState(cartInit);
    const addItem = (item, quantity, size) => {
        if(cart.length > 0) {
            function finderId(producto) {
                return (producto.id === item.id)
            };
            let idDuplicado = cart.find(finderId);
            function finderTalle(producto) {
                return (producto.id === item.id && Number(producto.talle) === Number(size))
            };
            let talleDuplicado = cart.find(finderTalle);
            if(idDuplicado === undefined){
                setCart([...cart, {id: item.id, descripcion: item.descripcion, precio: item.precio, imagen: item.imagen, cantidad: quantity, talle: size}]);
                localStorage.setItem("cart", JSON.stringify([...cart, {id: item.id, descripcion: item.descripcion, precio: item.precio, imagen: item.imagen, cantidad: quantity, talle: size}]));
            } else if (idDuplicado && talleDuplicado === undefined) {
                const idFiltrados = cart.filter(producto => producto.id !== item.id);
                const talleFiltrados = cart.filter(producto => producto.id === item.id && producto.talle !== size);
                setCart([...idFiltrados, ...talleFiltrados, {id: item.id, descripcion: item.descripcion, precio: item.precio, imagen: item.imagen, cantidad: quantity, talle: size}]);
                localStorage.setItem("cart", JSON.stringify([...idFiltrados, ...talleFiltrados, {id: item.id, descripcion: item.descripcion, precio: item.precio, imagen: item.imagen, cantidad: quantity, talle: size}]));
            } else {
                const filtroId = cart.filter(producto => producto.id !== item.id);
                const filtroTalle = cart.filter(producto => producto.id === item.id && producto.talle !== size);
                talleDuplicado.cantidad += quantity;
                setCart([...filtroId, ...filtroTalle, talleDuplicado]);
                localStorage.setItem("cart", JSON.stringify([...filtroId, ...filtroTalle, talleDuplicado]));
            }
        } else {
            setCart([...cart, {id: item.id, descripcion: item.descripcion, precio: item.precio, imagen: item.imagen, cantidad: quantity, talle: size}]);
            localStorage.setItem("cart", JSON.stringify([...cart, {id: item.id, descripcion: item.descripcion, precio: item.precio, imagen: item.imagen, cantidad: quantity, talle: size}]));
        }
    };
    const removeItem = (id, talle, cantidad) => {
        let idFiltrado = cart.filter(product => product.id !== id);
        let talleFiltrado = cart.filter(prod => (prod.id === id) && (prod.talle !== talle));
        setCart([...idFiltrado, ...talleFiltrado]);
        localStorage.setItem("cart", JSON.stringify([...idFiltrado, ...talleFiltrado]));
    };
    const vaciarCarrito = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    };
    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };
    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    };
    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem,  
            removeItem, 
            vaciarCarrito,
            totalCompra,
            cantidadCarrito
        }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;