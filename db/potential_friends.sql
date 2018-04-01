select * from relationships r
full outer join users u on u.facebook_id = r.user_id1
where r.user_id1 != $1 and r.user_id1 is null