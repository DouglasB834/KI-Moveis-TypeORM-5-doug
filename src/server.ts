import app from "./app";
import AppDataSource from "./data-source";

// (async () => {

//     await AppDataSource.initialize()
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })
    
//     app.listen(3000, () => {
//         console.log("Servidor executando")
//     })    
// })()

AppDataSource.initialize().then(() => {
    console.log("DB conectado ");
    app.listen(3000, () => {
      console.log("Servidor executando");
    });
  }).catch(error => console.log(error))
  