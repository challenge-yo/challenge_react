select * 
from relationships
inner join users on relationships.user_id1 = users.facebook_id
where relationships.users_id2 = $1 AND friendstatus = 0