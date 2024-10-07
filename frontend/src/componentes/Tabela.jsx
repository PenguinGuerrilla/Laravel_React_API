import axios from "axios";

function Tabela() {
  // Make a request for a user with a given ID
  axios
    .get("http://127.0.0.1:8000/api/pessoas")
    .then(function (response) {
      // handle success
      console.log(response);
      const rows = response.data.pessoas;
      const tableBody = document.getElementById("tableBody");

      if (!tableBody.textContent) {
        rows.forEach((row) => {
          tableBody.innerHTML += `
                <tr>
                    <th scope="row">${row.id}</th>
                    <td>${row.nome}</td>
                    <td>${row.email}</td>
                    <td>${row.cpf}</td>
                    <td>${row.nasc}</td>
                    <td>${row.telefone}</td>
                    <td>${row.sexo}</td>
                </tr>
    
            `;
        });
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <div
      className="container"
      style={{ outline: "2px solid grey", borderRadius: "15px", padding: "0", textAlign: 'center' }}
    >
      <table
        className="table container table-striped"
        style={{ margin: "0", padding: "0" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
            <th scope="col">Nascimento</th>
            <th scope="col">Telefone</th>
            <th scope="col">Sexo</th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  );
}
export default Tabela;
