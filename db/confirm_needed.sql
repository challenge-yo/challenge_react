-- select * 
-- from relationships
-- join users u on u.facebook_id = relationships.user_id2
-- where user_id2 = $1 AND relationships.friendstatus = 0;

-- select * from relationships
-- inner join users on users.facebook_id = relationships.user_id1
-- where (user_id1 = $1 or user_id2 = $1) and friendstatus = 0;

select * from users
full outer join relationships on users.facebook_id = relationships.user_id1
where relationships.user_id2 = $1 and friendstatus = 0;