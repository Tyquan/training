# Ch1 Introduction

## The Ascendance of Data

> We live in a world that’s drowning in data. Websites track every user’s every click. Your smartphone is building up a record of your location and speed every second of every day. “Quantified selfers” wear pedometers-on-steroids that are ever recording their heart rates, movement habits, diet, and sleep patterns. Smart cars collect driving habits, smart homes collect living habits, and smart marketers collect purchasing habits. The Internet itself represents a huge graph of knowledge that contains (among other things) an enormous cross-referenced encyclopedia; domain-specific databases about movies, music, sports results, pinball machines, memes, and cocktails; and too many government statistics (some of them nearly true!) from too many governments to wrap your head around. Buried in these data are answers to countless questions that no one’s ever thought to ask


## What Is Data Science?

> Some data scientists are—for all practical purposes—statisticians, while others are pretty much indistinguishable from software engineers. Some are machine-learning experts, while others couldn’t machine-learn their way out of kindergarten. Some are PhDs with impressive publication records, while others have never read an academic paper. 

>  In short, pretty much no matter how you define data science, you’ll find practitioners for whom the definition is totally, absolutely wrong.

>  We’ll say that a data scientist is someone who extracts insights from messy data. Today’s world is full of people trying to turn data into insight. 

> In 2012, the Obama campaign employed dozens of data scientists who data-mined and experimented their way to identifying voters who needed extra attention, choosing optimal donor-specific fundraising appeals and programs, and focusing get-outthe-vote efforts where they were most likely to be useful. It is generally agreed that these efforts played an important role in the president’s re-election, which means it is a safe bet that political campaigns of the future will become more and more datadriven, resulting in a never-ending arms race of data science and data collection. 


## Hypothetical Project: DataSciencester

> Congratulations! You’ve just been hired to lead the data science efforts at DataSciencester, the social network for data scientists. 

> Despite being for data scientists, DataSciencester has never actually invested in building its own data science practice. (In fairness, DataSciencester has never really invested in building its product either.) That will be your job! Throughout the book, we’ll be learning about data science concepts by solving problems that you encounter at work. Sometimes we’ll look at data explicitly supplied by users, sometimes we’ll look at data generated through their interactions with the site, and sometimes we’ll even look at data from experiments that we’ll design

> And because DataSciencester has a strong “not-invented-here” mentality, we’ll be building our own tools from scratch. At the end, you’ll have a pretty solid understanding of the fundamentals of data science. And you’ll be ready to apply your skills at a company with a less shaky premise, or to any other problems that happen to interest you


### Finding Key Connectors (connectors.py)

> It’s your first day on the job at DataSciencester, and the VP of Networking is full of questions about your users. Until now he’s had no one to ask, so he’s very excited to have you aboard. In particular, he wants you to identify who the “key connectors” are among data scientists. To this end, he gives you a dump of the entire DataSciencester network.

> What does this data dump look like? It consists of a list of users, each represented by a dict that contains for each user his or her id (which is a number) and name (which, in one of the great cosmic coincidences, rhymes with the user’s id):
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

> He also gives you the “friendship” data, represented as a list of pairs of IDs:
    friendships = [(0, 1), (0, 2), (1, 2), (1, 3), (2, 3), (3, 4), (4, 5), (5, 6), (5, 7), (6, 8), (7, 8), (8, 9)]

> For example, the tuple (0, 1) indicates that the data scientist with id 0 (Hero) and the data scientist with id 1 (Dunn) are friends. 

> Since we represented our users as dicts, it’s easy to augment them with extra data.

> For example, we might want to add a list of friends to each user. First we set each user’s friends property to an empty list:
    for user in users:
        user["friends"] = []

> And then we populate the lists using the friendships data:
    for i, j in friendships:
        # this works because users[i] is the user whose id is i
        users[i]["friends"].append(users[j]) # add i as a friend of j
        users[j]["friends"].append(users[i]) # add j as a friend of i 

> Once each user dict contains a list of friends, we can easily ask questions of our graph, like “what’s the average number of connections?”

> First we find the total number of connections, by summing up the lengths of all the friends lists:
    def number_of_friends(user):    
        """how many friends does _user_ have?"""    
        return len(user["friends"])  # length of friend_ids list

    total_connections = sum(number_of_friends(user)
                            for user in users)  # 24

> And then we just divide by the number of users:
    num_users = len(users) # length of the users list 
    avg_connections = total_connections / num_users # 2.4

> Since there aren’t very many users, we can sort them from “most friends” to “least friends”:
    # create a list (user_id, number_of_friends) 
    num_friends_by_id = [(user["id"], number_of_friends(user))                     
                                        for user in users]

    sorted(num_friends_by_id,                                 # get it sorted       
            key=lambda (user_id, num_friends): num_friends,   # by num_friends       
            reverse=True)                                     # largest to smallest


### Data Scientists You May Know

> While you’re still filling out new-hire paperwork, the VP of Fraternization comes by your desk. She wants to encourage more connections among your members, and she asks you to design a “Data Scientists You May Know” suggester. 

> Your first instinct is to suggest that a user might know the friends of friends. These are easy to compute: for each of a user’s friends, iterate over that person’s friends, and collect all the results:
    def friends_of_friend_ids_bad(user):    
        # "foaf" is short for "friend of a friend"    
        return [foaf["id"]            
            for friend in user["friends"]     # for each of user's friends            
            for foaf in friend["friends"]]    # get each of _their_ friends 

> When we call this on users[0] (Hero), it produces:
    [0, 2, 3, 0, 1, 3] 

> It includes user 0 (twice), since Hero is indeed friends with both of his friends. It includes users 1 and 2, although they are both friends with Hero already. And it includes user 3 twice, as Chi is reachable through two different friends:
    print [friend["id"] for friend in users[0]["friends"]]  # [1, 2] 
    print [friend["id"] for friend in users[1]["friends"]]  # [0, 2, 3] 
    print [friend["id"] for friend in users[2]["friends"]]  # [0, 1, 3] 