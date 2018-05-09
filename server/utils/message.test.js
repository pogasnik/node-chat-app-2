const expect = require('expect');
var {generateMsg} = require('./message');

describe('generateMessage', () => {
    
    it('should generate correct message object', () => {
        var from = 'a';
        var text = 'b';
        var msg = generateMsg(from, text);
        var createdAt = msg.createdAt;

        expect(createdAt).toBeA('number');
        expect(msg).toInclude({
            from,
            text
        }); 
    });
});