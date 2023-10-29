import React from "react";

function Contact() {
  return (
    <div>
      <from>
        <table>
          <tr>
            <td>
              <label for="personName">Name</label>
              <br />
              <input type="text" id="personName" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="personEmail">Email</label>
              <br />
              <input type="email"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Messege</label>
              <br />
              <textarea cols="25" rows="5"></textarea>
            </td>
          </tr>
          <tr>
            <td>
            <input type="submit" value="Submit"/>
            </td>
          </tr>
        </table>
        
      </from>
    </div>
  );
}

export default Contact;
