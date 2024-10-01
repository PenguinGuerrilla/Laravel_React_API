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
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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
  );
}
export default Tabela;
