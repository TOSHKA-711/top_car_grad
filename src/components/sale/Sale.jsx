import React, { useContext, useEffect, useState } from "react";
import "./Sale.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sale() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    brand: "",
    price: "",
    condition: "",
    model: "",
    color: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.error("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("brand", payload.brand);
    formData.append("model", payload.model);
    formData.append("price", payload.price);
    formData.append("color", payload.color);
    formData.append("condition", payload.condition);
    formData.append("image", selectedFile); 

    try {
      const response = await axios.post("http://localhost:3000/cars", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Car added successfully!", response.data);
      window.alert("Car added successfully!", response.data);
      window.location="search"
    } catch (error) {
      console.error("Error adding car:", error);
    }
    console.log(formData);
  };
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); 
  };

  return (
    <div className="sale flex-col">
      <p>Put your car up for sale for other users to buy</p>
      <h1>Sell your car</h1>
      <div className="sale-bar flex-col flex-center ">
        <div className="select">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">condition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="condition"
              value={payload.condition}
              label="condition"
              onChange={(e) => handleInputChange(e)}
              sx={{
                boxShadow: " 0px 0px 5px 1px rgba(157,157,157,0.75)",
              }}
            >
              <MenuItem value={"New"}>New</MenuItem>
              <MenuItem value={"Used"}>Used</MenuItem>
            </Select>
          </FormControl>
        </div>
      
        <div className="select">
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={payload.brand}
            name="brand"
          />
          <p>Brand</p>
        </div>
        <div className="select">
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={payload.model}
            name="model"
          />
          <p>Model</p>
        </div>
        <div className="select">
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={payload.color}
            name="color"
          />
          <p>Color</p>
        </div>
        <div className="select">
          <input
            type="number"
            onChange={(e) => handleInputChange(e)}
            value={payload.price}
            name="price"
          />
          <p>price</p>
        </div>
        <div className="select">
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange} 
            name="image"
            accept="image/*"
          />
          <p>Image</p>
        </div>

        <Link
          to=""
          className="search icon flex-row flex-center"
          onClick={handleSubmit}
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
}

// ======================>
// import React, { useContext, useEffect, useState } from "react";
// import "./Sale.css";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { IoMdAdd } from "react-icons/io";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Sale() {
//   const [image, setImage] = useState(null);
//   const [payload, setPayload] = useState({
//     image: null,
//     brand: "",
//     price: "",
//     condition: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPayload((prev) => ({ ...prev, [name]: value }));
//   };

//   //   handle image upload

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//       setPayload((prev) => ({ ...prev, image: file }));
//     }
//     event.target.value = ""; // Reset the input value
//   };

//   const handleUploadClick = () => {
//     document.getElementById("file-input").click();
//   };

//   useEffect(() => {
//     return () => {
//       if (image) {
//         URL.revokeObjectURL(image);
//       }
//     };
//   }, [image]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.post(`http://localhost:3000/cars` , payload);
//       console.log(response.data);
//       window.location="/search"
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     console.log("payload => ", payload);
//   };

//   return (
//     <div className="sale flex-col">
//       <p>Put your car up for sale for other users to buy</p>
//       <h1>Sell your car</h1>
//       <div className="sale-bar flex-col flex-center ">
//         <div className="select">
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">condition</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               name="condition"
//               value={payload.condition}
//               label="condition"
//               onChange={(e) => handleInputChange(e)}
//               sx={{
//                 boxShadow: " 0px 0px 5px 1px rgba(157,157,157,0.75)",
//               }}
//             >
//              <MenuItem value={"New"}>New</MenuItem>
//               <MenuItem value={"Used"}>Used</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//         <div className="select">
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Brand</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               name="brand"
//               value={payload.brand}
//               label="Brand"
//               onChange={(e) => handleInputChange(e)}
//               sx={{
//                 boxShadow: " 0px 0px 5px 1px rgba(157,157,157,0.75)",
//               }}
//             >
//               <MenuItem value={"Audi"}>Audi</MenuItem>
//               <MenuItem value={"BMW"}>BMW</MenuItem>
//               <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
//               <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//         <div className="select">
//           <input
//             type="number"
//             onChange={(e) => handleInputChange(e)}
//             value={payload.price}
//             name="price"
//           />
//           <p>price</p>
//         </div>
//         <div className="select">
//           <input
//             type="file"
//             accept="image/*"
//             id="file-input"
//             style={{ display: "none" }}
//             onChange={handleImageChange}
//             name="image"
//           />
//           <button
//             className="select "
//             style={{
//               border: " none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               textAlign: "center",
//               justifyContent: "center",
//               fontSize: "18px",
//               padding: "5px",
//               background: "none",
//             }}
//             onClick={handleUploadClick}
//           >
//             <FaCloudUploadAlt className="icon" />
//             ADD Image
//           </button>
//           {image && (
//             <div style={{ marginTop: "10px" }}>
//               <img
//                 src={image}
//                 alt="Preview"
//                 style={{
//                   maxWidth: "100%",
//                   height: "60px",
//                   borderRadius: "8px",
//                 }}
//               />
//             </div>
//           )}
//         </div>
//         <Link
//           to=""
//           className="search icon flex-row flex-center"
//           onClick={handleSearch}
//         >
//           <IoMdAdd />
//         </Link>
//       </div>
//     </div>
//   );
// }
