const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: "ec2-44-193-188-118.compute-1.amazonaws.com",//config.host,
            port: "5432", //config.port,
            database: "dc3950i2bmrnnc", //config.database,
            user: "fzwijulchtfgvs",  //config.user,
            password: "279f7f484e6d8c7a691cb2cb091efcc2ceec8b96da338da27104aa50a82de5ff", // config.password,
            ssl: {
                rejectUnauthorized: false
            },
        },
        debug: false,
    },
});