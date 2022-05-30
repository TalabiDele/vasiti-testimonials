import { React, useState } from "react";
import { Container } from "./Style";
import { FormBtn } from "../Button";
import { GrAttachment } from "react-icons/gr";
import AuthContext from "../ModalContext";
import { useContext } from "react";

const Modal = () => {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFile, setIsFile] = useState(false);
  const [image, setImage] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(null);
  const [city, setCity] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const [isVendorChecked, setIsVendorChecked] = useState(false);
  const [isCustomerChecked, setIsCustomerChecked] = useState(false);

  const { modal, setModal, done, setDone, storeData } = useContext(AuthContext);

  // let image = {};

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      if (file) {
        fileReader.readAsDataURL(file);
        // reader.readAsDataURL(event.target.files[0]);
      }
    });
  };

  const handleFileChange = async (e) => {
    setSelectedFile(e.target.files[0]);

    const base64 = await convertBase64(selectedFile);

    // image = e.target.files[0];
    setImage(base64);
    console.log(base64);

    setFileName(e.target.files[0].name);

    console.log(selectedFile);

    setIsFile(true);
  };

  const handleSubmit = async (e) => {
    if (firstName === "" || lastName === "" || message === "" || image === "") {
      alert("Please enter all information");
    } else {
      storeData(image, firstName + " " + lastName, type, message, city);

      setModal(false);
      setDone(true);
    }

    console.log("finished", done);
  };

  const changeRadio = (e) => {
    setIsVendorChecked(!isVendorChecked);

    setType(true);

    console.log(e.target.value);

    setIsVendor(true);
  };

  const handleCustomer = (e) => {
    setIsCustomerChecked(!isCustomerChecked);
    setType(false);

    setIsVendor(!isVendor);
  };

  const handleRemoveFile = (e) => {
    // setSelectedFile();

    setIsFile(!isVendor);
  };

  return (
    <>
      <Container
        modal={modal}
        // onClick={() => setModal(false)}
      >
        <div className="container">
          <div className="wrapper">
            <h1>Share your amazing story!</h1>
            <form action="">
              <div className="file">
                <div className="file-label">
                  <label htmlFor="file">Upload your Picture</label> <br />
                </div>

                <div className="input">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="width"
                    placeholder="Choose image"
                    onChange={(e) => handleFileChange(e)}
                  />
                  {isFile && (
                    <p className="remove" onClick={handleRemoveFile}>
                      X
                    </p>
                  )}
                  <label htmlFor="file" className="label">
                    <div className="label">
                      {isFile ? <p>{fileName}</p> : <p>Choose image</p>}
                      {!isFile && <GrAttachment fontSize={30} />}
                    </div>
                  </label>
                </div>
              </div>
              <div className="name">
                <div className="first">
                  <label htmlFor="name">First Name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="first">
                  <label htmlFor="last">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="last"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="story">Share your story</label>
              <br />
              <textarea
                name="story"
                id=""
                cols="30"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="interact">
                <p>What did you interact with Vasiti as?</p>
                <div className="radio">
                  <input
                    type="radio"
                    name="interact"
                    value="false"
                    checked={isCustomerChecked}
                    onChange={(e) => handleCustomer(e)}
                    // onClick={() => changeRadio()}
                  />
                  <label htmlFor="customer">Customer</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="interact"
                    value="true"
                    checked={isVendorChecked}
                    onChange={(e) => changeRadio(e)}
                    // onClick={() => changeRadio()}
                  />
                  <label htmlFor="vendor">Vendor</label>
                </div>
              </div>

              <>
                <label htmlFor="city">
                  City or Higher Institution (for Students)
                </label>
                <br />
                <textarea
                  name="city"
                  id="city"
                  cols="30"
                  rows="1"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></textarea>
              </>
              <div className="botton">
                <FormBtn onClick={() => handleSubmit()}>
                  Share your story!
                </FormBtn>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Modal;
