

url= `http://127.0.0.1:5000/adopcion`
 //url python anywhere
fetch(url)  //sino le paso otro metodo toma como que es un GET
            .then(response => response.json())
            .then(
                data => {
               console.log(data) //es un arreglo con todos los datos
               cad=``
               for (elemeto of data){
                cad= cad+
                `
              <tr class="">
                    <td scope="row">${elemento.id}</td>
                    <td>{${elemento.id_persona}}</td>
                    <td>{${elemento.id_pet}}</td>
                    <td>{${elemento.fechadop}}</td>
                    <td>{${elemento.observacion}}</td>.
                    <td>
                    
                    
                    </td>
                    
            </tr> `;
               }

               document.querySelector("tbody").innerHTML=cad
            })
            .catch(error => {
                console.log("Error:"+error)
                             
            });
   