delete from relationships 
where user_id1 = $1 and user_id2 = $2;
select * from relationships;