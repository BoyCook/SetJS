var should = require('should');
var Set = require('../../index.js');

describe('Set', function() {
    var data;

    before(function() {
        data = new Set();
        data.add('Craig Cook');
        data.add('Tim Watson');
        data.add('Charles Care');
        data.add('Richard Sheath');
        data.add('Brian Francic');

        data.should.exist;
        data.size().should.eql(5);
    });

    it('should give the correct length', function() {
        data.size().should.eql(5);
    });

    it('should get index correctly', function() {
        data.getIndex('Charles Care').should.eql(2);
        data.getIndex('Charles Doesnt Care').should.eql(-1);
    });

    it('should know if key exists', function() {
        data.containsKey(2)
        data.containsKey(13).should.be.false;
    });

    it('should know if item exists', function() {
        data.contains('Charles Care').should.be.true;
        data.contains('Charles doesnt Care').should.be.false;
    });

    it('should be able to remove item', function() {
        data.remove('Charles Care');
        data.size().should.eql(4);
        data.contains('Charles Care').should.be.false;
    });

    it('should not add item twice', function() {
        data.add('Charles Care');
        data.size().should.eql(5);
        data.contains('Charles Care').should.be.true;
    });

    it('should add all correctly', function() {
        data.addAll(['Foo bar', 'John Smith', 'Davy Jones']);
        data.size().should.eql(8);
        data.contains('Foo bar').should.be.true;
        data.contains('John Smith').should.be.true;
        data.contains('Davy Jones').should.be.true;
    });

    it('should clear properly', function() {
        data.clear();
        data.size().should.eql(0);
    });
});
