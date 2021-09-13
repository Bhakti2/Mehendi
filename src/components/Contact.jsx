// import React from "react";
// import axios from "axios";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       message: "",
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url: "http://localhost:3002/send",
//       data: this.state,
//     }).then((response) => {
//       //   <div>
//       //   { window.location.hash === '#success' &&
//       //     <div id="success">
//       //       <p>Your message has been sent!</p>
//       //     </div>
//       //   }
//       //   { window.location.hash === '#error' &&
//       //     <div id="error">
//       //       <p>An error occured while submitting the form.</p>
//       //     </div>
//       //   }
//       // </div>

//       if (response.data.status === "success") {
//        alert("Msg sent");
//         this.resetForm();
//       } else if (response.data.status === "fail") {
//        alert("erroorr..!!");
//       }
//     });
//   }

//   resetForm() {
//     this.setState({ name: "", email: "", message: "" });
//   }

//   render() {
//     return (
//       <div id="contact">
//         <h1 className="CardHeading">Book An Appoinment</h1>

//         <div className="App fromOutterCon">
//           <form
//             id="contact-form"
//             onSubmit={this.handleSubmit.bind(this)}
//             method="POST"
//             className="Myform"
//           >
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 value={this.state.name}
//                 onChange={this.onNameChange.bind(this)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 aria-describedby="emailHelp"
//                 value={this.state.email}
//                 onChange={this.onEmailChange.bind(this)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 className="form-control"
//                 rows="5"
//                 id="message"
//                 value={this.state.message}
//                 onChange={this.onMessageChange.bind(this)}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>

//           </form>
//         </div>
//       </div>
//     );
//   }

//   onNameChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value });
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value });
//   }
// }

// export default App;

import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_5nsrozc', 'template_etiqe0t', e.target, 'user_vZuAqTtFOu5t6BH0RRBnX')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    // <form className="contact-form" onSubmit={sendEmail}>
    //   <input type="hidden" name="contact_number" />
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Subject</label>
    //   <input type="text" name="subject" />
    //   <label>Message</label>
    //   <textarea name="html_message" />
    //   <input type="submit" value="Send" />
    // </form>
    <div id="contact">
         <h1 className="CardHeading">Book An Appoinment</h1>

         <div className="App fromOutterCon">
           <form
            id="contact-form"
                className="contact-form Myform"
                 onSubmit={sendEmail}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
               type="text" 
                  name="from_name"
                className="form-control"
                id="name"
               
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="from_email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
               type="text" 
               name="subject"
               className="form-control"
                id="name"
               
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                name="html_message"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

          </form>
        </div>
      </div>
  );
}