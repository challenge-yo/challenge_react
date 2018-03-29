select *
from users
join relationships on users.facebook_id = relationships.user_id1
where relationships.friendstatus = 1 AND users.facebook_id = $1