select * 
from relationships
inner join users on relationships.user_id1 = users.facebook_id
where users.facebook_id = $1 AND friendstatus = 0