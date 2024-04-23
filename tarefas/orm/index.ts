const odbc = require('odbc');
const connection = odbc.connect('Driver={PostgreSQL Unicode};Server=localhost;Port=5400;Database=empresa_db;Uid=taciano;Pwd=password;', (error: any, connection: { query: (arg0: string, arg1: (error: any, result: any) => void) => void; }) => {
    connection.query('SELECT * FROM funcionario', (error: any, result: any) => {
        if (error) { console.error(error) }
        console.log(result);
    });
});