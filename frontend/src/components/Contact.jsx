
// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

// const sendMail = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/send/mail",
//         {
//           name,
//           email,
//           message,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success(data.message);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response.data.message);
//     }
//   };
//   return(
//     <section className='contact'>
//       <form onSubmit={sendMail}>
//         <h1>CONTACT US</h1>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Message</label>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
//           {loading && <ClipLoader size={20} color="white" />}
//           Send Message
//         </button>
//       </form>
//     </section>
//   ) 
// }

// export default Contact


// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast } from "react-toastify";

//   const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMail = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!name || !email || !message) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       toast.error("Please enter a valid email");
//       return;
//     }

//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//         // `${process.env.REACT_APP_API_URL}/send/mail`,
//         "http://localhost:4000/send/mail", // Use environment variable for API URL
//         { name, email, message },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success(data.message);
//     } 
//     catch (error) {
//       const errorMsg =
//         error.response?.data?.message || "Something went wrong, please try again";
//       toast.error(errorMsg);
//     }
//      finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="contact">
//       <form onSubmit={sendMail}>
//         <h1>CONTACT US</h1>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             aria-label="Name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             aria-label="Email"
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             aria-label="Message"
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
//           {loading && <ClipLoader size={20} color="white" />}
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNumber, setContactNumber] = useState(""); // New state for contact number
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message || !contactNumber) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!/^\d{10}$/.test(contactNumber)) {
      toast.error("Please enter a valid 10-digit contact number");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail", // Use environment variable for API URL
        { name, email, message, contactNumber }, // Include contact number in the request
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      setContactNumber(""); // Reset contact number
      toast.success(data.message);
    } 
    catch (error) {
      const errorMsg =
        error.response?.data?.message || "Something went wrong, please try again";
      toast.error(errorMsg);
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            aria-label="Contact Number"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;



