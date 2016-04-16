var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Test multi structure', function(){
    it('MULTI', function(done) {
        var foo = 'bar',
            beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.length(3);
        expect(beverages).to.have.property('tea').with.length(3);
        done();
    })
});