select * 
from relationships
join users u on u.facebook_id = relationships.user_id2
where user_id2 = $1 AND relationships.friendstatus = 0;