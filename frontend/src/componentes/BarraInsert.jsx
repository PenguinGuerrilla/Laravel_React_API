function BarraInsert() {
  return (
    <form className="form-inline">
      <div
        className="container px-3 my-3 form-check form-check-inline"
        style={{
          width: "80%",
          display: "flex",
          margin: "auto",
          justifyContent: "space-between",
          outline: "2px solid grey",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <div className="form-group mr-3" style={{ marginRight: "15px" }}>
          <label htmlFor="">Nome: </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group" style={{ marginRight: "15px" }}>
          <label htmlFor="">E-mail: </label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group" style={{ marginRight: "15px" }}>
          <label htmlFor="">CPF: </label>
          <input type="text" maxLength={14} className="form-control" required />
        </div>
        <div className="form-group" style={{ marginRight: "15px" }}>
          <label htmlFor="">Data de Nascimento: </label>
          <input type="date" className="form-control" required />
        </div>
        <div className="form-group" style={{ marginRight: "15px" }}>
          <label htmlFor="">Telefone: </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mx-2">
          <p style={{ marginBottom: "0" }} >
            Sexo:
          </p>
          <div style={{ display: "flex", flexDirection: 'column' , margin: "0", padding: "0",}}>
            <label for="masc" required>
              <input type="radio" name="sexo" value="M" checked /> M
            </label>
          </div>
          <div>
            <label for="fem">
              <input type="radio" name="sexo" value="F" /> F
            </label>
          </div>
        </div>

        <button className="btn btn-primary mt-2 mx-2" style={{ height: "50px" }}>
          Cadastrar
        </button>
      </div>
    </form>
  );
}
//nome
//email
//cpf
//nasc
//tel
//sex
export default BarraInsert;
