'use client'

import { useEffect, useState } from "react"
import { db, storage } from "../config/FirebaseConfig"
import { getDocs, collection, deleteDoc, doc, addDoc } from "firebase/firestore"
import { ref, deleteObject } from "firebase/storage"
import Counter from "../(components)/counter/Counter"
import Navbar from "../(components)/navbar/Navbar"

export default function CartPage() {

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(1)
    const [checkout, setCheckout] = useState([])

    useEffect(() => {
        getProductsHandler()
    }, [])

    const getProductsHandler = async () => {
        try {
            let productsList = []
            const querySnapshot = await getDocs(collection(db, "cartProducts"));
            querySnapshot.forEach((doc) => {
                productsList.push({
                    description: doc.data().description,
                    image: doc.data().image,
                    id: doc.id,
                    modal: doc.data().modal,
                    price: doc.data().price
                })
            });
            setProducts(productsList)
        } catch (error) {
            console.log(error);
        }
    }

    const onIncreamentHandler = () => {
        setCount(count + 1)
    }
    const onDecreamentHandler = () => {
        if (count == 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    const onRemoveHnadler = async (item) => {
        try {
            await deleteDoc(doc(db, "cartProducts", item.id));
            let filteredProducts = products.filter((product) => product.id !== item.id)
            setStudents(filteredProducts)
        } catch (error) {
            console.log(error);

        }
    }


    const total = products.length

    const onCheckoutHandler =(item)=>{

        let newDoc ={
            description:item.description,
            image:item.image,
            modal:item.modal,
            price:item.price,

        }

    }

    return (
        <>

            <Navbar total={total} />

            <div className="my-5 mx-auto text-center text-5xl font-semibold">
                <h1>Shopping cart</h1>
            </div>

            <table class="table table-striped mx-auto" style={{ width: "70%" }}>
                <thead>
                    <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">QTY</th>
                        <th scope="col">Total</th>
                        <th scope="col">Ections</th>
                    </tr>
                </thead>
                {
                    products.map((item) => {
                        return (
                            <>
                                <tbody className="mx-auto">
                                    <tr>
                                        <td className="flex items-center justify-start ">
                                            <div>
                                                <img src={item.image} alt="image" className="w-32" />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="text-[#EE4A00] underline">
                                                    {item.description}
                                                </div>
                                                <div>
                                                    {item.modal}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="mx-auto">{item.price}</td>
                                        <td className="mx-auto">
                                            <Counter count={count} onIncreamentHandler={onIncreamentHandler} onDecreamentHandler={onDecreamentHandler} />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className="text-lg text-gray-400 hover:bg-gray-700 border-2 border-gray-700" onClick={() => onRemoveHnadler(item)}>Remove</button>
                                        </td>
                                    </tr>
                                </tbody>


                                    <button className="bg-[#EE4A00] p-2 text-3xl font-semibold text-white tracking-normal" onClick={()=>onCheckoutHandler(item)} >
                                        <span>Proceed to checkout</span>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                                    </button>
                            </>
                        )
                    })
                }
            </table>


        </>

    )
}