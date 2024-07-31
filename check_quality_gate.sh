#!/bin/sh

PROJECT_KEY='lolo-frontend'
SONAR_HOST='http://35.193.96.87:9001'
SONAR_TOKEN='squ_3f583409bb9c564cfaca350e4fd4bb70f4da7542'

CE_TASK_ID=$(curl -u $SONAR_TOKEN: $SONAR_HOST/api/ce/component?component=$PROJECT_KEY | jq -r '.current.id')
echo $CE_TASK_ID

QUALITY_GATE_STATUS=$(curl -u $SONAR_TOKEN: $SONAR_HOST/api/ce/task?id=$CE_TASK_ID | jq -r '.task.status')
echo $QUALITY_GATE_STATUS

if [ "$QUALITY_GATE_STATUS" = "SUCCESS" ]; then
  echo 'Quality Gate passed'
  exit 0
else
  echo 'Quality Gate failed'
  exit 1
fi
