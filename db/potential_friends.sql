select * from relationships r
full outer join users u on u.facebook_id = r.user_id1
where u.facebook_id != $1 and r.user_id1 is null