-- select user_id2 as user_id, u.user_name, u.image, u.score
-- from relationships
-- join users u on u.facebook_id = relationships.user_id2
-- where user_id2 != $1
-- union
-- select user_id1,  u.user_name, u.image, u.score
-- from relationships
-- join users u on u.facebook_id = relationships.user_id1
-- where user_id1 != $1;

select * from users
full outer join relationships on users.facebook_id = relationships.user_id2
where users.facebook_id != $1 and friendstatus is null;