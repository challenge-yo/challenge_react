-- select *
-- from users
-- join relationships on users.facebook_id = relationships.user_id1
-- where relationships.friendstatus = 1 and relationships.user_id1 = $1 or relationships.user_id2 = $1

select user_id2 as user_id, u.user_name, u.image, u.score, relationships.friendstatus
from relationships
join users u on u.facebook_id = relationships.user_id2
where user_id2 != $1 and friendstatus = 1
union
select user_id1,  u.user_name, u.image, u.score, relationships.friendstatus
from relationships
join users u on u.facebook_id = relationships.user_id1
where user_id1 != $1 and friendstatus = 1
