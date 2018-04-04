update users
set score = score + $2
where id = $1;