require('../test_utils.js')()

var ctrl = require('../lib/core.js')
var opts = { extra_args: [ '--quiet'] }

describe("Service Commands", function() {
    before(startMaxScale)

    it('link servers to a service', function() {
        return verifyCommand('link service Read-Connection-Router server1 server2 server3 server4',
                             'services/Read-Connection-Router')
            .then(function(res) {
                res.data.relationships.servers.data.length.should.equal(4)
                res.data.relationships.servers.data[0].id.should.equal("server1")
                res.data.relationships.servers.data[1].id.should.equal("server2")
                res.data.relationships.servers.data[2].id.should.equal("server3")
                res.data.relationships.servers.data[3].id.should.equal("server4")
            })
    })

    it('unlink servers from a service', function() {
        return verifyCommand('unlink service Read-Connection-Router server2 server3 server4',
                             'services/Read-Connection-Router')
            .then(function(res) {
                res.data.relationships.servers.data.length.should.equal(1)
                res.data.relationships.servers.data[0].id.should.equal("server1")
            })
    })

    it('unlink servers from a monitor', function() {
        return verifyCommand('unlink monitor MySQL-Monitor server2 server3 server4',
                             'monitors/MySQL-Monitor')
            .then(function(res) {
                res.data.relationships.servers.data.length.should.equal(1)
                res.data.relationships.servers.data[0].id.should.equal("server1")
            })
    })

    it('link servers to a monitor', function() {
        return verifyCommand('link monitor MySQL-Monitor server1 server2 server3 server4',
                             'monitors/MySQL-Monitor')
            .then(function(res) {
                res.data.relationships.servers.data.length.should.equal(4)
                res.data.relationships.servers.data[0].id.should.equal("server1")
                res.data.relationships.servers.data[1].id.should.equal("server2")
                res.data.relationships.servers.data[2].id.should.equal("server3")
                res.data.relationships.servers.data[3].id.should.equal("server4")
            })
    })

    it('link non-existent service to servers', function() {
        return doCommand('link service not-a-service server1 server2 server3 server4')
            .should.be.rejected
    })

    it('link non-existent monitor to servers', function() {
        return doCommand('link monitor not-a-monitor server1 server2 server3 server4')
            .should.be.rejected
    })

    it('unlink non-existent service to servers', function() {
        return doCommand('unlink service not-a-service server1 server2 server3 server4')
            .should.be.rejected
    })

    it('unlink non-existent monitor to servers', function() {
        return doCommand('unlink monitor not-a-monitor server1 server2 server3 server4')
            .should.be.rejected
    })

    after(stopMaxScale)
});