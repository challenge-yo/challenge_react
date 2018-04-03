select * from relationships r
join users u on r.user_id2 = u.facebook_id
where r.user_id1 = $1
and friendstatus = 0
and action_user != $1