update relationships 
set friendstatus = 2 
where user_id1 = $1 and user_id2 = $2;