members = %w(A B C D E F)
suffule_members = members.shuffle
group_a = suffule_members[0, 2]
group_b = suffule_members[2, 2]
group_random = suffule_members[4, suffule_members.size - 1]

group_random.each do |member|
  if [true, false].sample
    group_a.push(member)
  else
    group_b.push(member)
  end
end

p group_a.sort
p group_b.sort
