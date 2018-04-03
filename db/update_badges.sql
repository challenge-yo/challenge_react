update badges
set health = health + $2,
 finance = finance + $3,
  education = education + $4,
   spiritual = spiritual + $5,
    buisness = buisness + $6,
     social = social + $7,
      family = family + $8
where user_id = $1;