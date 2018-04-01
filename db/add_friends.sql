insert into relationships (user_id1, user_id2, friendstatus, action_user)
values ($1, $2, $3, $1); -- Add friend
insert into relationships (user_id1, user_id2, friendstatus, action_user)
values ($2, $1, $3, $1); -- Add Opposite Side of Friendship