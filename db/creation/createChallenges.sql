create table if not exists challenges (
    id serial primary key,
    challengeName text,
    category text,
    difficulty int,
    challengeDescription text,
    suggestedWager int,
    dueTime int,
    awardAmount int,

)