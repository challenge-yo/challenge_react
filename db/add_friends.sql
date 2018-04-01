insert into relationships (user_id1, user_id2, friendstatus, action_user)
values ($1, $2, $3, $1); -- Add friend
insert into relationships (user_id1, user_id2, friendstatus, action_user)
values ($2, $1, $3, $1); -- Add Opposite Side of Friendship

select * from relationships r
full outer join users u on u.facebook_id = r.user_id1
where u.facebook_id != $1 and r.user_id1 is null;