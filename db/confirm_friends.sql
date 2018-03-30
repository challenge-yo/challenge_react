update relationships 
set friendstatus = 1
where (user_id1 = $1 and user_id2 = $2) or (user_id2 = $1 and user_id1 = $2);

select * from relationships;