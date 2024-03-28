#!/bin/bash

# Replace the following variables with your own values
STACK_NAME="demo-johndev4-forAwsEventBridge-stack"
TEMPLATE_FILE="../templates/sns-topic-demo-johndev4-forAwsEventBridge.json"

# Create the CloudFormation stack
aws cloudformation create-stack --stack-name "$STACK_NAME" --template-body file://"$TEMPLATE_FILE"
