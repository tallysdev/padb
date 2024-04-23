const odbc = require('odbc');
const connectString = 'Driver={PostgreSQL Unicode};Server=localhost;Port=5400;Database=empresa_db;Uid=taciano;Pwd=password;';

async function main() {
    
    const InsertAtividades = odbc.connect(connectString, (error: any, connection: { query: (arg0: string, arg1: (error: any, result: any) => void) => void; }) => {
        connection.query('INSERT INTO atividade (descricao, projeto, data_inicio, data_fim) VALUES(\'BD - Atividade ODBC\', 3, \'2024-04-23\', \'2024-04-23\')', (error: any, result: any) => {
            if (error) { console.error(error) }
            console.log(result);
        });
    });

    const UpdateGerenteProjeto = odbc.connect(connectString, (error: any, connection: { query: (arg0: string, arg1: (error: any, result: any) => void) => void; }) => {
        connection.query('UPDATE projeto SET responsavel = 5 WHERE nome = \'Monitoria\'', (error: any, result: any) => {
            if (error) { console.error(error) }
            console.log(result);
        });
    })

    const SelectProjetoByAtividades = odbc.connect(connectString, (error: any, connection: { query: (arg0: string, arg1: (error: any, result: any) => void) => void; }) => {
        connection.query('SELECT p.nome, a.descricao, a.projeto FROM projeto p JOIN atividade a on p.codigo = a.projeto ORDER BY a.projeto', (error: any, result: any) => {
            if (error) { console.error(error) }
            console.log(result);
        });
    })
}
main().catch(console.error);