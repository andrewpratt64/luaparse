describe('return', function() {
  it('return return                           -- FAIL', function() {
    expect(parser.parse('return return', {wait:true}).end).throws("[1:7] Unexpected symbol 'return' near '<eof>'");
  });
  it('return 1', function() {
    expect(parser.parse('return 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return local                            -- FAIL', function() {
    expect(parser.parse('return local', {wait:true}).end).throws("[1:7] Unexpected symbol 'local' near '<eof>'");
  });
  it('return "foo"', function() {
    expect(parser.parse('return "foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": "foo"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return 1,                               -- FAIL', function() {
    expect(parser.parse('return 1,', {wait:true}).end).throws("[1:9] <expression> expected near '<eof>'");
  });
  it('return 1,2,3', function() {
    expect(parser.parse('return 1,2,3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            },
            {
              "type": "Literal",
              "value": 3
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return a,b,c,d', function() {
    expect(parser.parse('return a,b,c,d')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Identifier",
              "name": "a"
            },
            {
              "type": "Identifier",
              "name": "b"
            },
            {
              "type": "Identifier",
              "name": "c"
            },
            {
              "type": "Identifier",
              "name": "d"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return 1,2;', function() {
    expect(parser.parse('return 1,2;')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            }
          ]
        }
      ],
      "comments": []
    });
  });
});

