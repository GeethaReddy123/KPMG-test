import boto3
client = boto3.client('ec2')
x=client.describe_instances()
print(x)
data=x["Reservations"][2]
dataof_instance=data["Instances"]
for i in range (len(dataof_instance)):
    print(f"instance id is {dataof_instance[i]['InstanceId']}")
