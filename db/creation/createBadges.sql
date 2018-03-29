create table if not exists badges (
    id serial primary key,
    userID foreign key,
    health int,
    finance int,
    education int,
    spiritual int,
    business int,
    social int,
    family int,

)