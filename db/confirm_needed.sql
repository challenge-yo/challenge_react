select * from users
join relationships on users.id = relationships.user_id2
where friendstatus = 0;