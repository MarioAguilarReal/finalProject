import emailjs from 'emailjs-com';
import './modal.scss';

////////////////////////////////////


const emailPublicKey = 'bzoIMetVFz5PKhbTI'; // The EmailJS public key, I'm using mine which goes to my gmail
emailjs.init(emailPublicKey);

interface EmailParams {
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
}

const sendEmail = () => {
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const subjectElement = document.getElementById('subject') as HTMLInputElement;
  const messageElement = document.getElementById('message') as HTMLTextAreaElement;

  let subject = '';

  if (nameElement && emailElement && subjectElement && messageElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    subject = subjectElement.value;
    const message = messageElement.value;

    const emailParams: EmailParams = {
      from_email: email,
      from_name: name,
      subject: subject,
      message: message,
    };

    if (!subject) {
      const result = window.confirm(
        'Subject is empty. Are you sure you want to send this email?'
      );

      if (result === true) {
        const serviceId = 'service_8u2tvei'; // service ID
        const templateId = 'template_5l4jjga'; // template ID
        performSendEmail(serviceId, templateId, emailParams);
      }
    } else {
      const serviceId = 'service_8u2tvei'; // service ID
      const templateId = 'template_5l4jjga'; // template ID
      performSendEmail(serviceId, templateId, emailParams);
    }
  } else {
    console.error('One or more form elements not found in the DOM');
  }

  function performSendEmail(
    serviceId: string,
    templateId: string,
    params: EmailParams
  ) {
    const mergedParams = {
      ...params,
      service_id: 'service_8u2tvei', // service id goes here again, I'm using the old one
      template_id: templateId,
    };
  
    emailjs
      .send('service_8u2tvei', 'template_5l4jjga', mergedParams) // I'm using the old one again, the old template
      .then(
        (response) => {
          alert('Email was successfully sent');
        },
        (error) => {
          alert('Error sending email');
        }
      );
  }
};


////////////////////////////////////////////////////////


const ModalComponent = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary contact-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {" "}
        Contact Agent <i className="fa-regular fa-envelope"></i>{" "}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Agent
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="/ruta/para/manejar/formulario" method="POST">

                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" className="form-control" id="telefono" name="telefono" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" className="form-control" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea className="form-control" id="message" name="message" required />
                </div>


              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button type="button" className="btn btn-primary" onClick={sendEmail}>
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
