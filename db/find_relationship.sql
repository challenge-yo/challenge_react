select * from relationships
where (user_id1 = $1 and user_id2 = $2) OR (user_id1 = $2 and user_id2 = $1)
