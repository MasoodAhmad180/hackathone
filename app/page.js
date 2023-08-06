'use client'

import { useState } from "react"
import { db, storage } from "./config/FirebaseConfig"
import { addDoc, collection, doc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function Home() {

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [modal1, setModal1] = useState('')
  const [modal2, setModal2] = useState('')
  const [modal3, setModal3] = useState('')
  const [modal4, setModal4] = useState('')
  const [imageURL, setImageURL] = useState()
  const [products, setProducts] = useState([])

  const getFileHandler = (e) => {
    const file = e.target.files[0]
    setImageURL(file)
  }

  const onSubmitHandler = async () => {
    try {

      const storageRef = ref(storage, description);
      const snapshot = await uploadBytes(storageRef, imageURL);

      const downloadUrl = await getDownloadURL(snapshot.ref);

      let newData = {
        description,
        price,
        category,
        modal1,
        modal2,
        modal3,
        modal4,
        image: downloadUrl
      }

      const docRef = await addDoc(collection(db, 'products'), newData)
      const docRef2 = await addDoc(collection(db, (subCategory)), newData)
      setProducts([...products, { ...newData, id: docRef.id }])
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
       
      <div className="mb-4 w-1/3 mx-auto">
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Category
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Sub Category
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Modal1
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={modal1}
          onChange={(e) => setModal1(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Modal2
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={modal2}
          onChange={(e) => setModal2(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Modal3
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={modal3}
          onChange={(e) => setModal3(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">
          Modal4
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product name"
          value={modal4}
          onChange={(e) => setModal4(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-price" className="block text-gray-700 font-bold mb-2">
          Product Price
        </label>
        <input
          type="number"
          id="product-price"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product-price" className="block text-gray-700 font-bold mb-2">
          Image
        </label>
        <input
          type="file"
          id="product-price"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter product price"
          onChange={getFileHandler}
        />
      </div>
      <div >
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onSubmitHandler}>
      Add Products
      </button>
      </div>
      </div>
    </>
  )
}
