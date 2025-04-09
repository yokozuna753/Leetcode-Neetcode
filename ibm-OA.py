def getUpgradeTime(server_id, start_id, end_id):
    server_id_dict = {}
    res = []

    for idx, ele in enumerate(server_id):
        server_id_dict[ele] = idx

    for i in range(len(start_id)):
        processing_times = []
        prev = start_id[i]
        for j in range(start_id[i], end_id[i] + 1):
            print("PREV HERE: ", prev)
            if j == start_id[i]:
                processing_times.append(1)
            if server_id_dict[j] > server_id_dict[prev]:
                processing_times.append(1)
            elif server_id_dict[j] < server_id_dict[prev]:
                processing_times.append(2)
            prev = j
        res.append(sum(processing_times))

    print(res)


getUpgradeTime(server_id=[1, 3, 4, 2, 5], start_id=[1, 2, 4], end_id=[5, 4, 5])
getUpgradeTime(server_id=[5,3,2,6,1,4], start_id=[4,2,1], end_id=[6,3,3])

# servers are organized in descending order of processing power
# lower index server_id[0] == higher processing power
# higher index server_id[1] == lower processing power

# upgrading server_id[0] takes 1 hour
# upgrading server_id after index 0 takes 1 hour
# if server_id[i + 1] comes after (it has less processing power) "<" server_id[i] => this takes 2 hours


# keep track of the previous server id's position
# "<" if the curr is smaller than the prev, processing time = 1 hour --- curr = index 3;
# prev = index 2; 3 is a higher index => lower processing power, 3 < 2 == 1 hr
# ">" if the curr is greater than the prev, processing time = 1 hour --- curr = index 3;
# prev = index 4; 3 is a lower index => higher processing power than 4, 3 > 4  = 2 hrs

"""
server_id=[1,3,4,2,5],
start_id=[1,2,4],
end_id=  [5,4,5]

range = 1,2,3,4,5
1. store the elements in the server_id in a dict
2. iterate through the length of start_id array
    i = 1   
    - make a temp array to store the processing times (put this in the first loop, since the loops are nested)
    - make a range and loop through it for each start and end id[i]
    - store the idx of the previous server id in a var (default to first elements position) => 1 hr

"""


# return array of m ints => time required for each range
"""
getUpgradeTime(server_id=[1,3,4,2,5], start_id=[1,2,4], end_id=[5,4,5])

server_id[] size = n

get multiple ranges using the start and end id array's

ranges:
tech 1 = index[0] in each array
tech 2 = index[1] in each array
tech 3 = index[2] in each array

range = 1,2,3,4,5
range[i] = 1 => 1 hour
range[i] = 2 => 1 hour - it is at a higher index, lower process power
range[i] = 3 => 2 hours
range[i] = 4 => 1 hours
range[i] = 5 => 1 hours

[1, 2, 4]
[5, 4, 5]

- loop through range len(start_id) = > start and end id arrays are the same length = 1,2,3,4,5
- if the 
"""