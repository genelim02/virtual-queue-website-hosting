# Test Case

## Test Case #1: Search for Queue ID based on Company ID '1000000001'
### Description: 
A successful request should show the Queue IDs the Company is in in the drop down menu.
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
All the queue ids under that company id should be there (QueueId: "QUEUE01001", "QUEUE01002", "QUEUE01003", "QUEUE01004", "QUEUE01005") where "QUEUE01004" and "QUEUE1005" should be inactive.

</br>
</br> 

## Test Case #2: Hide Inactive Queues
### Description:
The inactive queues should be hidden and not part of the drop down menu
## Pre-condition:
1. The q