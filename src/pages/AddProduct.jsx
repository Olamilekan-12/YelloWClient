import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddImage from "../assets/images/plus-icon.png";
const AddProduct = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    // Add more fields as needed
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mt-[52px]">
      <nav className="add-product-nav">
        <div className="add-product-back-icon">
          <ArrowBackIcon />
          <p>Post New Ad</p>
        </div>
        <div>
          <button className="clear">clear</button>
        </div>
      </nav>
      <form action="">
        <div className="form-field">
          <label htmlFor="categories">Category</label>
          <select name="categories" id="">
            <option value="heavy-duty-machineries">
              Heavy-Duty-Machineries
            </option>
            <option value="heavy-duty-machineries">
              Heavy-Duty-Machineries
            </option>
            <option value="heavy-duty-machineries">
              Heavy-Duty-Machineries
            </option>
          </select>
        </div>
        <div className="form-field photo-container">
          <h2>Add Photo</h2>
          <p>
            First picture is the title picture. Drag pictures to change it's
            order
          </p>
          <label htmlFor="photos" className="photos">
            <img src={AddImage} alt="" id="add-img" />
            <span>Add 3 Photos</span>
            <span>Supported formats are .jpg, gif and png</span>
            <span>Pictures may not exceed 5mb</span>
          </label>
          <input type="file" id="photos" name="photos" />
        </div>
        <div className="form-field">
          <label htmlFor="region">Region</label>
          <select name="region" id="region">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="model">Model</label>
          <select name="model" id="model">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="subtype">Subtype</label>
          <select name="subtype" id="subtype">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="condition">Condition</label>
          <select name="condition" id="condition">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="engine-capacity">Select Engine Capacity</label>
          <select name="engine-capacity" id="engine-capacity">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="fueling-type">Fueling Type</label>
          <select name="fueling-type" id="fueling-type">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="color">Color</label>
          <select name="color" id="color">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="usage">Usage Options</label>
          <select name="usage" id="usage">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>
          <select name="description" id="description">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="price">Price</label>
          <select name="price" id="price">
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
