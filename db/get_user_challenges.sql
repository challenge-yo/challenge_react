select uc.id, uc.challenge_id, uc.user_id, uc.validator_id, uc.start_time, uc.end_time, uc.users_wager, uc.is_validated,
c.challenge_name, c.category, c.difficulty, c.description, c.suggested_wager, c.due_time, c.award_amount, c.badge
from userchallenges uc 
join challenges c on c.id = uc.challenge_id
where user_id = $1