update relationships 
set friendstatus = 1 
where user_id1 = $1 and user_id2 = $2;