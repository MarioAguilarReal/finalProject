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
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="form-control" id="nombre" name="nombre" required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="form-group">
                <label htmlFor="telefono">Número de Teléfono:</label>
                <input type="tel" className="form-control" id="telefono" name="telefono" required />
            </div>

            <div className="form-group">
                <label htmlFor="asunto">Asunto:</label>
                <input type="text" className="form-control" id="asunto" name="asunto" required />
            </div>
            </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
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
