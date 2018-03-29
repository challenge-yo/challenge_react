create table if not exists userChallenges (
    id serial primary key,
    challengeID foreign key,
    userID foreign key,
    validatorID foreign key,
    startTime int,
    endTime int,
    userWager int,
    validate int

)