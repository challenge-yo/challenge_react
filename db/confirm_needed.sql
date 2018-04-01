select * from relationships r
full outer join users u on u.facebook_id = r.user_id1
where user_id1 != $1 and friendstatus = 0 and action_user != $1;