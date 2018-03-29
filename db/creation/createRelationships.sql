create table if not exists relationships (
    id serial primary key,
    userID1 int,
    userID2 int,
    relationshipStatus int,
    isMember int

)