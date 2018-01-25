let path = require('path')
global.rootPath = path.normalize(path.join(__dirname, '..', '..'))

module.exports = {
    // url and port of your IRI node
    iota_node_url: 'http://iota:14265',

    // keep this
    stresstest_table_url: 'http://analytics.iotaledger.net/stresstest.table',

    // address and port where the exporter will be bound
    bind_address: '0.0.0.0',
    bind_port: 9311,

    // address where zmq is being served (example: '127.0.0.1:5556')
    // *** Leave blank if ZMQ is not enabled on IRI ***
    zmq_url: 'zeromq:5556',

    // if true, will pull in market info (IOT to USD, IOT to BTC, etc)
    // *** Leave blank if you do not want market into pulled in ***
    market_info_flag: 'true'
}
