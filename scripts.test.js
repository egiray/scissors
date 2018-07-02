const rewire = require('rewire')
const scripts = rewire('./scripts')

const compare = scripts.__get__('compare'); 

test('User selects rock and computer selects rock', ()=>{
    expect(compare("rock","rock")).toEqual({
        'message':"You choose rock, computer choose rock. It's a tie!",
        'result':2
    })
})

test('User selects rock and computer selects scissors', ()=>{
    expect(compare("rock","scissors")).toEqual({
        'message':'You choose rock, computer choose scissors. Rock beats scissors. You Win!',
        'result':1
    })
})

test('User selects rock and computer selects paper', ()=>{
    expect(compare("rock","paper")).toEqual({
        'message':'You choose rock, computer choose paper. Paper beats rock. You Lost!',
        'result':0
    })
})

test('User selects paper and computer selects rock', ()=>{
    expect(compare("paper","rock")).toEqual({
        'message':'You choose paper, computer choose rock. Paper beats rock. You Win!',
        'result':1
    })
})

test('User selects paper and computer selects scissors', ()=>{
    expect(compare("paper","scissors")).toEqual({
        'message':'You choose paper, computer choose scissors. Scissors beats paper. You Lost!',
        'result':0
    })
})

test('User selects scissors and computer selects paper', ()=>{
    expect(compare("scissors","paper")).toEqual({
        'message':'You choose scissors, computer choose paper. Scissors beats paper. You Win!',
        'result':1
    })
})

test('User selects scissors and computer selects rock', ()=>{
    expect(compare("scissors","rock")).toEqual({
        'message':'You choose scissors, computer choose rock. Rock beats scissors. You lost!',
        'result':0
    })
})