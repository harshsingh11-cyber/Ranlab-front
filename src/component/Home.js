import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';


const baseUrl = "https://ranlabs-bak.onrender.com";
function Home() {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [file, setFile] = useState(null);
    const [address, setAddress] = useState('');
    const [education, setEducation] = useState('');
    const [isbn, setIsbn] = useState('');

    const [data, setData] = useState([]);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked");
      
        try {
          const formData = new FormData(e.target);
          const name = formData.get('name');
          const photoFile = formData.get('photo');
          const address = formData.get('address');
          const education = formData.get('education');
          const isbn = formData.get('isbn');
      
          // Convert photo file to base64 string
          const reader = new FileReader();
          reader.readAsDataURL(photoFile);
          reader.onloadend = () => {
            const base64String = reader.result;
      
            console.log(name, base64String, address, education, isbn);
            console.log(formData);
      
            // Make a POST request to your backend API endpoint
            axios.post(`${baseUrl}/regi`, { name, base64String, address, education, isbn }).then((response) => {
              // Handle successful registration
              console.log(response.data);
            });
          };
        } catch (error) {
          // Handle error
          console.error('Error:', error);
        }
      };
      
 useEffect(()=>{
    fetchData();
 });

 const fetchData = () => {
    axios.get(`${baseUrl}/regi`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/register/${id}`)
      .then(() => {
        // Filter out the deleted item from the data array
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  

    return (
        <div className="registration-form">
            <h2>Registration Form</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="photo">Photo:</label>
                <input
                    type="file"
                    id="photo"
                    name='photo'
                    onChange={(e) => setPhoto(e.target.files[0])}
                    required
                />

                <label htmlFor="file">File Upload:</label>
                <input
                    type="file"
                    id="file"
                    name='file'
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />

                <label htmlFor="address">Address:</label>
                <textarea
                    id="address"
                    value={address}
                    name='address'
                    onChange={(e) => setAddress(e.target.value)}
                    required
                ></textarea>

                <label htmlFor="education">Education:</label>
                <input
                    type="text"
                    id="education"
                    name='education'
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    required
                />

                <label htmlFor="isbn">ISBN Number:</label>
                <input
                    type="text"
                    id="isbn"
                    name='isbn'
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    required
                />

                <button>Register</button>
            </form>
            <br />
            <br />
            <div>
            {data.length > 0 ? (
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Education</th>
        <th>ISBN Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.education}</td>
          <td>{item.isbn}</td>
          <td>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>No data available.</p>
)}
       </div>
        </div>
    );
};

export default Home


// const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log("button clicked");

//     try {
//         // Convert photo to base64 string
//         const reader = new FileReader();
//         reader.readAsDataURL(photo);
//         reader.onloadend = () => {
//             const base64String = reader.result;

//             console.log(base64String);

//             // Create form data
//             const formData = new FormData(e.target);
//             const name = formData.get('name');
//             const base64Strings = formData.get('photo');
//             const file = formData.get('file');
//             const address = formData.get('address');
//             const education = formData.get('education');
//             const isbn = formData.get('isbn');

      
//             // const formData = new FormData();
//             // formData.append('name', name);
//             // formData.append('photo', base64String);
//             // formData.append('file', file);
//             // formData.append('address', address);
//             // formData.append('education', education);
//             // formData.append('isbn', isbn);
//               console.log(name,base64Strings,file,address,education,isbn);
//             console.log(formData);
//             // Make a POST request to your backend API endpoint
//             axios.post(`${baseUrl}/regi`, {name,base64String,file,address,education,isbn}).then((response) => {
//                 // Handle successful registration
//                 console.log(response.data);
//             });
//         };
//     } catch (error) {
//         // Handle error
//         console.error('Error:', error);
//     }
// };
