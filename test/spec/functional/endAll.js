/**
 * sufficient to get tested with phantomjs
 */
describe('endAll', function() {

    /**
     * create a bunch of instances first
     */
    before(h.setup(true));
    before(h.setup(true));
    before(h.setup(true));
    before(h.setup(true));

    it('should delete all sessions', function(done) {

        this.client

            // check if client has running sessions
            .sessions(function(err,res) {
                assert.ifError(err);
                assert.ok(res.value && res.value.length > 0);
            })

            // end sessions
            .endAll()

            // check if sessions were closed
            .sessions(function(err,res) {
                assert.ifError(err);
                assert.ok(res.value.length === 0);
            })

            // reinitialize session for next tests
            .init(done);

    });

});