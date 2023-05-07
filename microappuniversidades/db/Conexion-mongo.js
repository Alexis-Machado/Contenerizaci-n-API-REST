const mongo = require('mongoose');

const getConnection = async() => {

    try{
        const url = 'mongodb+srv://Jhon:ROOT@cluster0.zvgkbwr.mongodb.net/?retryWrites=true&w=majority';

        await mongo.connect(url);
        console.log('Conexion Exitosa');

    }catch (error){
        console.log('Error de Conexión a la Base de Datos:', error.message);
    }

}

module.exports={
    getConnection,
}