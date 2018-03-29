update relationships 
set friendstatus = 0 
where user_id1 = $1 and user_id2 = $2;

select * from users
join relationships on users.id = relationships.user_id2
where friendstatus is null;

