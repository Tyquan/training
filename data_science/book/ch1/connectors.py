from __future__ import division  # integer division is lame 

users = [
        { "id": 0, "name": "Hero" },
        { "id": 1, "name": "Dunn" },
        { "id": 2, "name": "Sue" },
        { "id": 3, "name": "Chi" },
        { "id": 4, "name": "Thor" },
        { "id": 5, "name": "Clive" },
        { "id": 6, "name": "Hicks" },
        { "id": 7, "name": "Devin" },
        { "id": 8, "name": "Kate" },
        { "id": 9, "name": "Klein" }
    ]

friendships = [(0, 1), (0, 2), (1, 2), (1, 3), (2, 3), (3, 4), (4, 5), (5, 6), (5, 7), (6, 8), (7, 8), (8, 9)]

# modify the users dict and add a category for friends
for user in users:
    user["friends"] = []

# And then we populate the lists using the friendships data
for i, j in friendships:
    # this works because users[i] is the user whose id is i
    users[i]["friends"].append(users[j]) # add i as a friend of j
    users[j]["friends"].append(users[i]) # add j as a friend of i 

def number_of_friends(user):    
        """how many friends does _user_ have?"""    
        return len(user["friends"])  # length of friend_ids list

total_connections = sum(number_of_friends(user)
                            for user in users)  # 24

num_users = len(users) # length of the users list 
avg_connections = total_connections / num_users # 2.4

## get friend of friends
def friends_of_friend_ids_bad(user):    
        # "foaf" is short for "friend of a friend"    
        return [foaf["id"]            
            for friend in user["friends"]     # for each of user's friends            
            for foaf in friend["friends"]]    # get each of _their_ friends 

print(friends_of_friend_ids_bad(users[0]))
print([friend["id"] for friend in users[0]["friends"]])  # [1, 2] 
print([friend["id"] for friend in users[1]["friends"]])  # [0, 2, 3] 
print([friend["id"] for friend in users[2]["friends"]])  # [0, 1, 3] 