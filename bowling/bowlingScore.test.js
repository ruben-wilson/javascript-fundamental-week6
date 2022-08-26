const BowlingScore = require('./bowlingScore');

describe('bowling score', ()=>{
  it('it add score of pins and cycles thru all ten rounds', ()=>{
    new const scorer = new BowlingScore
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    scorer.add()
    expect(score.showScore()).toEqual('s')
  });
});