# Test Cases

## Test Case #1: Search for Queue ID based on Company ID '1000000001'
### Description: 
- A successful request should show the Queue IDs the Company is in in the drop down menu.
### Pre-condition:
1. Backend tester should be running - both company and customer
2. Backend should be populated
### Test Steps:
1. Start up the backend tester and ensure that the backend is populated
2. Go live on port 5500
3. Click 'Add Another'
4. Input the company id '100000001' 
5. Click 'Search'
6. Click the dropdown menu
### Expected Results:
- All the queue ids under that company id should be there (QueueId: "QUEUE01001", "QUEUE01002", "QUEUE01003", "QUEUE01004", "QUEUE01005") where "QUEUE01004" and "QUEUE1005" should be inactive (greyed out).

</br>
</br> 

## Test Case #2: Hide Inactive Queues
### Description:
- The inactive queues should be hidden and not part of the drop down menu
### Pre-condition:
1. Backend tester should be running - both company and customer
2. Backend should be populated
3. The company id has been searched
### Test Steps:
1. Click on the checkbox that says "Show Inactive" and ensure that it is not ticked.
2. Click on the drop down menu
### Expected Results:
- There should only be 3 queue ids showing (QueueId: "QUEUE01001", "QUEUE01002", "QUEUE01003"). There are no greyed out queue ids

</br>
</br> 

## Test Case #3: View Arrival Rate Based on Queue ID
### Description:
- Arrival Rate appears
### Pre-condition:
### Test Steps:
### Expected Results:

</br>
</br> 

## Test Case #4: Get multiple graphs
### Description:
### Pre-condition:
### Test Steps:
### Expected Results:

</br>
</br>

# Error Test Cases

## Error Test Case #1: Search for Queue ID based on Company ID 'qwe'
### Description: 
- Search for Queue IDs with a Company ID that is not in the valid format
### Pre-condition:
1. Backend tester should be running - both company and customer
2. Backend should be populated
### Test Steps:
1. Start up the backend tester and ensure that the backend is populated
2. Go live on port 5500
3. Click 'Add Another'
4. Input the company id 'qwe' 
5. Click 'Search'
### Expected Results:
- An alert should pop up saying "Invalid Company Id Format"

</br>
</br> 

## Error Test Case #2: Search for Queue ID based on Company ID '2222222222'
### Description: 
- Search for Queue IDs with a Company ID that does not exist in the database
### Pre-condition:
1. Backend tester should be running - both company and customer
2. Backend should be populated
### Test Steps:
1. Start up the backend tester and ensure that the backend is populated
2. Go live on port 5500
3. Click 'Add Another'
4. Input the company id '2222222222' 
5. Click 'Search'
### Expected Results:
- An alert should pop up saying "Company ID Does Not Exist"


## Test Case #: 
### Description:
### Pre-condition:
### Test Steps:
### Expected Results: