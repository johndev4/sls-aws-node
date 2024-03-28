#!/bin/bash

# Replace the following variables with your own values
STACK_NAME="demo-johndev4-forAwsEventBridge-stack"

# Delete the CloudFormation stack
aws cloudformation delete-stack --stack-name "$STACK_NAME"
