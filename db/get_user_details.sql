select u.id, u.user_name, u.first_name, u.last_name, u.image,
b.health, b.finance, b.social, b.education, b.buisness, b.family, b.spiritual

from users u
join badges b on b.user_id = u.id
where u.id = $1;