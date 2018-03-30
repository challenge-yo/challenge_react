-- select *
-- from users
-- join relationships on users.facebook_id = relationships.user_id1
-- where relationships.friendstatus = 1 and relationships.user_id1 = $1 or relationships.user_id2 = $1

select * from relationships
inner join users on users.facebook_id = relationships.user_id1
where (user_id1 = $1 or user_id2 = $1) and friendstatus = 1;